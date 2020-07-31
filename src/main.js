import {createSiteControlTemplate, createSiteFilterTemplate, createSiteSortWrapperTemplate,
  createSiteSortFilterTemplate, createSiteTaskEditFormTemplate, createSiteTaskLoadButtonTemplate,
  createSiteTaskTemplate, createSiteTaskWrapperTemplate} from './index.js';

const TASK_COUNT = 3;
const mainWrapper = document.querySelector(`.main`);
const mainControlsWrapper = mainWrapper.querySelector(`.main__control`);

const render = (wrapper, template, mode = `beforeend`) => {
  wrapper.insertAdjacentHTML(mode, template);
};

render(mainControlsWrapper, createSiteControlTemplate());
render(mainWrapper, createSiteFilterTemplate());
render(mainWrapper, createSiteSortWrapperTemplate());
render(mainWrapper.querySelector(`.board`), createSiteSortFilterTemplate());
render(mainWrapper.querySelector(`.board`), createSiteTaskWrapperTemplate());
render(mainWrapper.querySelector(`.board__tasks`), createSiteTaskEditFormTemplate());
for (let i = 0; i < TASK_COUNT; i++) {
  render(mainWrapper.querySelector(`.board__tasks`), createSiteTaskTemplate());
}
render(mainWrapper.querySelector(`.board`), createSiteTaskLoadButtonTemplate());
