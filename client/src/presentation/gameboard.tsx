import { useEffect } from "react";

function Gameboard() {
  useEffect(() => {
    const canvas = document.getElementById("gameboard");
    const context = canvas.getContext("2d");
    context.fillStyle = "purple";
    context.fillRect(10, 10, 150, 100);
  });

  return <canvas id="gameboard" />;
}

export { Gameboard };
