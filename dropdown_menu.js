var MENU = [
  {
    'title': 'Item 1',
    'submenu': null,
  },
  {
    'title': 'Item 2',
    'submenu': null,
  },
  {
    'title': 'Item 3',
    'submenu': [
      {
        'title': 'Sub 1',
        'submenu': null,
      },
      {
        'title': 'Sub 2',
        'submenu': null,
      },
      {
        'title': 'Sub 3',
        'submenu': [
          {
            'title': 'SubSub 1',
            'submenu': null,
          },
          {
            'title': 'SubSub 2',
            'submenu': null,
          },
          {
            'title': 'SubSub 3',
            'submenu': null,
          },
        ]
      }
    ]
  }
];

function menuClasses(data) {
  return className = data.substr(0, data.indexOf(' ')).toLowerCase();
}

function buildMenu(data, menu){
  var html = '<ul class="' + menu + '">';
  for(item in data){
    if(data[item].submenu != null){
      html += '<li class="dropdown" id="' + data[item].title + '">';
      html += data[item].title;
      menu = 'sub-menu ' + menuClasses(data[item].submenu[0].title)
      html += buildMenu(data[item].submenu, menu);
    } else {
      html += '<li id="' + data[item].title + '">';
      html += data[item].title
    }
    html += '</li>';
  }
  html += '</ul>';
  return html;
}

$(document).ready(function() {

  $('body').append($.parseHTML((buildMenu(MENU, "menu"))));

  $('.dropdown').hover( function(){
    $(this).children('.sub-menu').show();
  }, function(){
    $(this).children('.sub-menu').hide();
  });

  $('li').click(function(event) {
    event.stopPropagation()
    alert($(this).attr('id'));
  });


});
