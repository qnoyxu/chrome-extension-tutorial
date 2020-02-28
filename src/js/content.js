"use strict";

const eventsWith = tag => {
  const events = document.getElementsByClassName('dojoxCalendarEvent');

  console.log('↓全部のeventsです↓');
  console.log(events);
  console.log('');
  const eventsWithTag = Array.prototype.filter.call(events, element =>
    ((element.querySelector('[data-dojo-attach-point="summaryNode"]') || '')
      .innerText || ''
    ).includes(`:${tag}:`)
  );
  console.log('↓特定のtagを持つeventsです↓');
  console.log(eventsWithTag);
  console.log('');

  return Array.prototype.filter.call(events, element =>
    ((element.querySelector('[data-dojo-attach-point="summaryNode"]') || '')
      .innerText || ''
    ).includes(`:${tag}:`)
  );
};


const changeBackgroundColor = (color, event) => {

  console.log('↓背景色を変更するdivタグです↓');
  console.log(event.querySelector('.bg'));
  console.log('');

  ((event.querySelector('.bg') || '').style || '').backgroundColor = color
}

const settings =
  [ { 'tag' : 'taisaku', 'color' : '#f00' } ];


const main = () => {
  settings.map(setting => {
    Array.prototype.map.call(eventsWith(setting.tag), event =>
      changeBackgroundColor(setting.color, event)
    );
  });
};


window.addEventListener('load', setTimeout(main, 1000), false);
