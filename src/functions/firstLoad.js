import { loadHeader } from "../pages/header";
import { loadFooter } from "../pages/footer";
import { loadHome } from "../pages/home";
import "../css/header-footer.css";

function firstLoad() {
    loadHeader();
    loadHome();
    loadFooter();
}

export { firstLoad };
