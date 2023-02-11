import React from "react";
import { Button, Container } from "reactstrap";

function MainPage() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const buttonOnClick = () => {
    document.getElementById("upload-btn").addEventListener("change", (e) => {
      let file = e.target.files[0];
      if (file !== undefined) {
        const imgName = file.name;
        let element = document.getElementById("nameOutput");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        element.appendChild(document.createTextNode(imgName));
      }
    });
    document.getElementById("fileInput").click();
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + require("./assets/background.jpg") + ")",
      }}
      className="page-header"
      data-parallax={true}
      ref={pageHeader}
    >
      <div className="filter" />
      <Container>
        <div className="motto text-center">
          <b style={{ fontSize: "100px" }}>"TrashTalks"</b>
          <h3>Upload Image:</h3>
          <br />

          <Button
            onClick={buttonOnClick}
            id="upload-btn"
            className="btn-round mr-1"
            color="neutral"
            target="_blank"
            outline
          >
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ width: 0, height: 0 }}
            />
            UPLOAD
          </Button>
          <h3>The file you uploaded is: </h3>
          <h3 id="nameOutput"> </h3>
        </div>
      </Container>
    </div>
  );
}
export default MainPage;
