import { useEffect } from "react";

function Gameboard() {
  useEffect(() => {
    const canvas = document.getElementById("gameboard") as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.fillStyle = "purple";
    context.fillRect(10, 10, 150, 100);
  }, []);

  return <canvas id="gameboard" />;
}

export { Gameboard };
