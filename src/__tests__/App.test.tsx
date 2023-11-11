import App from "../App";
import { render, screen } from "../utils/test-utils";

describe("App smoke", () => {
  it("renders app screen", () => {
    render(<App />);

    expect(screen.getByText("Big Rocket Gaming")).toBeInTheDocument();
  });
});
