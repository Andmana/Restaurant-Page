import { loadHeader } from "../pages/header";
import { loadFooter } from "../pages/footer";
import { loadHome } from "../pages/home";

function firstLoad() {
    loadHeader();
    loadHome();
    loadFooter();
}

export { firstLoad };
