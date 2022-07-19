[...document.querySelectorAll(".part + .part ul li .katex")]
  .filter((item) => /(×)|(vlist-t")/.test(item.innerHTML))
  .forEach((item) => {
    [...item.childNodes[1].childNodes]
      .filter((item) => /(×)|(vlist-t")/.test(item.innerHTML))
      .forEach((item) => {
        item.style.backgroundColor = "yellow";
      });
  });
