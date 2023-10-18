
const findPopularRepo = () => {
  let authorImage = document.getElementById("authorImage");
  let repoName = document.getElementById("repoName");
  let repoAuthor = document.getElementById("authorName");
  let repoFork = document.getElementById("forks");
  let repoStar = document.getElementById("stars");
  let isPopular = document.getElementById("isPopular");
  let searchBtn = document.getElementById("searchButton");

  const fetchRepoInfo = (repoName) => {
    const accessToken = "ACCESS_TOKEN_GOES_HERE"; // Please enter your token here
    const ownerName = "OWNER_NAME_GOES_HERE"; //Please enter the name of owner

    const headers = new Headers({
      Authorization: `token ${accessToken}`,
      "Content-Type": "application/json",
    });

    const requestOptions = {
      method: "GET",
      cache: "no-cache",
      headers: headers,
      redirect: "follow",
    };

    fetch(
      `https://api.github.com/repos/${ownerName}/${repoName}`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        displayRepoInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);

        // Reset the fields to predefined values
        repoName.value = ".......";
        repoAuthor.value = ".......";
        repoStar.textContent = "0";
        repoFork.textContent = "0";
        authorImage.setAttribute("src", "https://placehold.co/200");
        alert(error.message);
      });
  };

  const validateInput = (repoName) => {
    // Add validation logic here

    if (repoName.trim() !== "") {
      fetchRepoInfo(repoName);
    } else {
      alert("Please enter a repository name");
    }
  };

  const displayRepoInfo = (data) => {
    // Add display logic here
    repoName.innerText = data.name;
    repoAuthor.innerText = data.full_name.split("/")[0];
    repoStar.innerText = `${data.stargazers_count} Stars`;
    repoFork.innerText = `${data.forks} Forks`;
    authorImage.setAttribute("src", data.owner.avatar_url);

    isPopular.innerHTML = calculatePopularity(data.stars, data.forks);
  };

  const bindEvent = () => {
    searchBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const repoName = document.getElementById("searchField").value;

      validateInput(repoName);

      // fetchRepoInfo(repoName.value);
    });
  };

  const calculatePopularity = (stars, forks) => {
    const score = stars + 2 * forks;
    return score >= 500
      ? "<span class='w-max rounded border border-black-500 shadow-sm px-3 uppercase'>Popular Repository</span>"
      : "<span class='w-max rounded border border-black-500 shadow-sm px-3 uppercase'>Not Popular Repository</span>";
  };

  return {
    bindEvent: bindEvent,
  };
};

findPopularRepo().bindEvent();
