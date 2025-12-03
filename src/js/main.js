import { DateTime } from "luxon";
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

const FORMAT = "dd.LL.y HH:mm:ss";

const el = document.getElementById('currentDataTime');

function tick() {
	const now = DateTime.now();
	el.textContent = now.toFormat(FORMAT);
}

tick()
setInterval(tick, 1000);