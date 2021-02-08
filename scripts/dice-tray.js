Hooks.once('init', async function() {
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // **OVERVIEW**:  Produce a table of HTML SVG instructions to draw die icons.
  //                Die icons are assigned dynamically to the HTML and are rendered when the sidebar is rendered.
  // 
  const dice = {
    'd4': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <polygon points="31.7,15.7 13.2,47.8 31.7,37.1 	"/>
        <polygon points="32.3,15.7 32.3,37.1 50.8,47.8 	"/>
        <polygon points="32,37.6 13.5,48.3 50.5,48.3 	"/>
      </g>
      </svg>`,
    'd6': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <path d="M11.5,9h41c1.4,0,2.6,1.1,2.6,2.6v41c0,1.4-1.1,2.6-2.6,2.6h-41C10.1,55,9,53.9,9,52.5v-41C9,10.1,10.1,9,11.5,9z"/>
      </g>
      </svg>`,
    'd8': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <g transform="translate(-242.40981,-473.89862)">
          <path d="M254.5,515.3l19.9-34.6l20.1,34.4L254.5,515.3z"/>
          <path d="M253.4,515.1l-0.3-19.6l20.2-14.9L253.4,515.1z"/>
          <path d="M295.4,514.9l0.3-19.3l-20.3-15L295.4,514.9z"/>
          <path d="M274.4,531.2l-19.9-14.9l40-0.3L274.4,531.2z"/>
        </g>
      </g>
      </svg>`,
    'd10': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <g transform="matrix(1.1679092,0,0,1.1679092,-274.931,-137.53749)">
          <path d="M263.4,124.6L249.9,153l12.5,8.1l13.5-8.2L263.4,124.6z"/>
          <path d="M264.1,124.1l12.5,28.6l7.3-2.3l0.5-11.6L264.1,124.1z"/>
          <path d="M262.7,161.8v4.4l20.9-14.7l-7,2L262.7,161.8z"/>
          <path d="M262.7,124.2l-13.7,28.5l-7.1-3.1l-0.6-11.6L262.7,124.2z"/>
          <path d="M261.8,161.7v4.5l-20-15.4l6.9,2.7L261.8,161.7z"/>
        </g>
      </g>
      </svg>`,
    'd12': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g>
        <path d="M24,43.7l-5.4-16.3l13.7-10.8l14.1,10.8L41.2,44L24,43.7z"/>
        <path d="M7.9,24l0.5,16.3l8.8,12.1l6.3-7.7l-5.8-17.5L7.9,24z"/>
        <path d="M41,45.1L23.9,45l-5.5,7.8l13.9,4.3l14.2-4.5L41,45.1z"/>
        <path d="M8.7,23.5l8.7-11.6l14.3-4.9v8.7L17.8,26.5L8.7,23.5z"/>
        <path d="M33.4,6.9l14.2,4.8l8.3,11.9l-8.7,3.1l-13.9-11L33.4,6.9z"/>
        <path d="M42.2,44.4l5.3-16.3l8.6-3l0,14.6l-8.5,11.9L42.2,44.4z"/>
      </g>
      </svg>`,
    'd20': `<?xml version="1.0" encoding="utf-8"?>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">
      <g transform="translate(-246.69456,-375.66745)">
        <path d="M278.2,382.1c-0.1,0-0.2,0-0.3,0.1L264.8,398c-0.2,0.3-0.2,0.3,0.1,0.3l26.4-0.1c0.4,0,0.4,0,0.1-0.3l-13-15.8
          C278.4,382.1,278.3,382.1,278.2,382.1L278.2,382.1z M280.7,383.5l11.9,14.5c0.2,0.2,0.2,0.2,0.5,0.1l6.3-2.9
          c0.4-0.2,0.4-0.2,0.1-0.4L280.7,383.5z M275.2,384c0,0-0.1,0.1-0.3,0.2l-17.3,11.4l5.4,2.5c0.3,0.1,0.4,0.1,0.5-0.1l11.4-13.6
          C275.1,384.1,275.2,384,275.2,384L275.2,384z M300.3,395.8c-0.1,0-0.1,0-0.3,0.1l-6.4,2.9c-0.2,0.1-0.2,0.2-0.1,0.4l7.5,19
          l-0.5-22.1C300.4,395.9,300.4,395.8,300.3,395.8L300.3,395.8z M257.1,396.4l-0.7,21.5l6.3-18.6c0.1-0.3,0.1-0.3-0.1-0.4
          L257.1,396.4L257.1,396.4z M291.6,399.2l-27,0.1c-0.4,0-0.4,0-0.2,0.3l13.7,23.1c0.2,0.4,0.2,0.3,0.4,0l13.2-23.2
          C291.9,399.3,291.9,399.2,291.6,399.2L291.6,399.2z M292.7,399.8c0,0-0.1,0.1-0.1,0.2l-13.3,23.3c-0.1,0.2-0.2,0.3,0.2,0.3
          l21.1-2.9c0.3-0.1,0.3-0.2,0.2-0.5l-7.9-20.2C292.7,399.9,292.7,399.8,292.7,399.8L292.7,399.8z M263.6,400c0,0,0,0.1-0.1,0.3
          l-6.7,19.8c-0.1,0.4-0.1,0.6,0.3,0.7l20.1,2.9c0.4,0.1,0.3-0.1,0.2-0.3l-13.7-23.1C263.6,400,263.6,400,263.6,400L263.6,400z
          M258.3,421.9l19.7,11.2c0.3,0.2,0.3,0.1,0.3-0.2l-0.4-7.9c0-0.3,0-0.4-0.3-0.4L258.3,421.9L258.3,421.9z M299.1,421.9l-20,2.8
          c-0.3,0-0.2,0.2-0.2,0.4l0.4,8c0,0.2,0,0.3,0.3,0.2L299.1,421.9z"/>
      </g>
      </svg>`
  };

  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // **OVERVIEW**:  Register a Handlebar helper that allows the HTML webpage to assign die icons dynamically.
  // 
  Handlebars.registerHelper('dtSvgDie', (context, options) => {
    return `${context}Svg`;
  });
  for (let [die, tpl] of Object.entries(dice)) {
    Handlebars.registerPartial(`${die}Svg`, tpl);
  }
});


Hooks.on('renderSidebarTab', (app, html, data) => {
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // **OVERVIEW**:  When the sidebar is rendered, produce the HTML of the dice tray and insert it below the chat form.
  //                Also implements button functions by calling the corresponding helper function.
  // 
  let $chat_form = html.find('#chat-form');
  const template = 'modules/dice-tray/templates/dice-tray.html';
  const options = {dice: {
    d4: 'd4',
    d6: 'd6',
    d8: 'd8',
    d10: 'd10',
    d12: 'd12',
    d20: 'd20'
  }};
  
  renderTemplate(template, options).then(c => {
    if (c.length > 0) {
      let $content = $(c);
      $chat_form.after($content);

      // **** Assign button functions.
      html.find('.dice-tray__button').on('click', event => {
        // **** Increment die amount on primary click (usually a left-click).
        event.preventDefault();
        let dataset = event.currentTarget.dataset;
        _updateDicePool(dataset.key, 1, html);
      });
	  
      html.find('.dice-tray__button').on('contextmenu', event => {
        // **** Decrement die amount on secondary click (usually a right-click).
        event.preventDefault();
        let dataset = event.currentTarget.dataset;
        _updateDicePool(dataset.key, -1, html);
      });
      
      html.find('.dice-tray__roll').on('click', event => {
        // **** Roll the accumulate amount of dice.
        _rollDicePool(html);
      });
    }
  });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// **OVERVIEW**:  A global variable that is used to track the number of dice in the user's dice tray.
// 
let _dicePool = {d4:0, d6:0, d8:0, d10:0, d12:0, d20:0};


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// **OVERVIEW**:  Update the '_dicePool' global variable.
//                Also reveal or hide the tracker above the corresponding die icon in the dice tray.
// 
function _updateDicePool(key, method, html) {
  let $flag_button = html.find(`.dice-tray__flag--${key}`);
  let qty = _dicePool[key] + method;

  if (qty > 0) {
    // **** If there exists a number of this die type, display the tracker.
    _dicePool[key] = qty;
    $flag_button.text(qty);
    $flag_button.removeClass('hide');
  } else {
    // **** Otherwise, hide the tracker.
    _dicePool[key] = 0;
    $flag_button.text('');
    $flag_button.addClass('hide');
  }
}


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// **OVERVIEW**:  Roll the dice pool by using Foundry VTT's Roll() method and displays the result as a message in chat.
//                Also empties the '_dicePool' global variable and the tracker.
// 
function _rollDicePool(html) {
  let formulaArg = '';
  let _formula = '';

  // **** Generate a valid string to pass to Roll().
  const dicePool = _dicePool;
  for (const [key, value] of Object.entries(dicePool)) {
    // **** Also empty the '_dicePool' global variable and hide the tracker in the process.
    _dicePool[key] = 0;
    if (value > 0) {
      let $flag_button = html.find(`.dice-tray__flag--${key}`);
      $flag_button.text('');
      $flag_button.addClass('hide');

      // **** The 'formula' variable will be used as a tooltip on the message that we display in chat.
      _formula = _formula + `${value}${key} + `;

      for (let i = 0; i < value; ++i) {
        // **** The 'formulaArg' variable will be passed to Roll().
        formulaArg = formulaArg + `${key} + `;
      }
    }
  }
  // **** Splice the formula strings to eliminate the unnecessary trailing characters: ' + '.
  formulaArg = formulaArg.slice(0,-3);
  _formula = _formula.slice(0,-3);

  if (formulaArg) {
    // **** Call the Roll() method and generate an HTML message from the result.
    let _data = {dice:[], formula:_formula, total:0};
    let _roll = new Roll(formulaArg, {});

    _roll.roll();
    for (let i = 0; i < _roll.dice.length; ++i) {
      // **** Generate the argument that will be passed when the HTML of the message is rendered — specifically, show the the dice type and their results.
      _data['dice'].push({
        id: `roll-button-id--${i}`,
        classes:`d${_roll.dice[i].faces}`,
        result:_roll.dice[i].total
      });
    }
    // **** Also show the dice total.
    _data['total'] = _roll.total;
    
    renderTemplate("modules/dice-tray/templates/roll-display.html", _data).then(c => {
      if (c.length > 0) {
        let $content = $(c);
        
        const _speaker = ChatMessage.getSpeaker();
        const _content = $content[0].outerHTML;

        // [speaker]: The author of the message.
        // [content]: The HTML contents of the message.
        // [type]:    The type of message. A roll from the dice tray is included as an ordinary dice roll.
        // [roll]:    The result of and the dice involved in the roll.
        // [sound]:   The sound that will be played when the message is rendered on to the chat log.
        const message = {
          speaker: _speaker,
          content: _content,
          type: CONST.CHAT_MESSAGE_TYPES.ROLL,
          roll: _roll,
          sound: CONFIG.sounds.dice
        }
      
        // **** Finally, create the message, which will be displayed in chat.
        CONFIG.ChatMessage.entityClass.create(message, {})
      }
    });
  }
}