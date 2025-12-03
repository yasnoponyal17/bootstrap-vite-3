# Интеграция Bootstrap 5 в приложение с Luxon. Этап 3

## Разметка HTML
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap + Vite. 3rd Stage</title>
    <script type="module" src="./js/main.js"></script>
  </head>
  <body>
		<div class='container-fluid mt-4'>
			<div class="row">
				<div class="col-2"></div>
				<div class="col-8">
					<div class="d-flex justify-content-center align-items-center" style='height: 100vh'>
						<button type='button' class='btn red-button' data-bs-toggle='modal' data-bs-target='#timeModal'>Показать время</button>
					</div>
				</div>
				<div class="col-2"></div>
			</div>
		</div>
		<div class='modal fade' id='timeModal' tabindex='-1' aria-labelledby='timeModalLabel' aria-hidden='true'>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="timeModalLabel">Сергей Ефимов</h5>
						<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Закрыть'></button>
					</div>
					<div class="modal-body text-center">
						<h3 id="currentDataTime">Загрузка времени... </h3>
					</div>
					<div class="modal-footer">
						<button type='button' class='btn btn-secondary' data-bs-dismiss="modal">Закрыть</button>
					</div>
				</div>
			</div>
		</div>
  </body>
</html>
```

## Стили SCSS
```scss
@import "bootstrap/scss/bootstrap";

.red-button {
	background-color: #D1001F;
	color: #FFFFFF;
	font-size: 32px;
	height: 50%;
	width: 100%;
}

.red-button:hover {
	background-color: #C30010;
}

.modal-header {
	background-color: #F8F9Fa;
}
```

## Скрипт 
```javascript
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
```

## Команда, чтобы построить проект в package.json
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview"  
```

## Интерфейс страницы
![Interface](/src/images/ui.png)

## Сравнение бандлов
### Все компоненты Bootstrap
![Full_bundle](/src/images/full-bundle.png)
### Необходимые компоненты Bootstrap
![Min_bundle](/src/images/min-bundle.png)

### Ефимов Сергей Робертович, 2 курс, ИВТ-2