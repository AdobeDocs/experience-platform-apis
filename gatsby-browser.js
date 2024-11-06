const isBrowser = typeof window !== "undefined";
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (isBrowser) {

    // check if on localhost or deployed somewhere
    if (window.location.pathname === "/") {
      document
        .querySelector(".getCredentialContainer")
        ?.setAttribute("daa-lh", "Platform APIs | Get Credentials");

      document
        .querySelectorAll(".getCredentialContainer button")
        .forEach(button => {
            button.setAttribute("daa-ll", button.innerText.trim());
        });
    document
        .querySelectorAll(".getCredentialContainer a")
        .forEach(link => {
            link.setAttribute("daa-ll", link.textContent.trim());
        });
    }

    document
    .querySelector("#redocly-container")
    ?.setAttribute("daa-lh", "Platform APIs | Redocly");

    document
        .querySelectorAll("#redocly_container button[data-cy='try-it']")
        .forEach(button => {
            button.setAttribute("daa-ll", button.previousSibling.innerText.trim())
        })
  }
};