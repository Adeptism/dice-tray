Hooks.on('renderChatMessage', (message, html, _) => {
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // **OVERVIEW**:  When a message is rendered in the chat log, determine if the message was a message generated from the dice tray.
  //                If yes, then apply a click function to every die icon that the message contains (should be safe?).
  //                The click function toggles between reading the die and ignoring it. By default, all dice are read.
  // 
  const typeFlag = (html.find('.roll-button')).length > 0; 
  const permFlag = message.isAuthor || game.user.isGM;

  // **** The message is a roll, is the correct type, and the user has permissions to edit it.
  if (message.isRoll && typeFlag && permFlag) {
    html.find('.roll-button').addClass('roll-button-click').on('click', event => {
      // **** Apply click function: _toggleDice().
      event.preventDefault();
      const key = event.currentTarget.dataset.key;

      // [key]:     The id corresponding to the die icon so that we may be able to find and update it in the HTML.
      // [message]: This ChatMessage instance. Derives the message contents and id, and calls update().
      _toggleDie(key, message);
    });
  }
});


async function _toggleDie(key, message) {
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // **OVERVIEW**:  Toggles whether a die icon should be read or ignored (on or off) by way of HTML manipulation. Pushes the HTML into a data object.
  //                When read, the die will count its result in the total. When ignored, the die will not.
  //                The data object is passed to update() and pushed to the server, where it will be updated across all clients.
  // 
  let data = {_id:message.data._id, content:message.data.content};
  let html = $(data.content);

  let $button = html.find(`.${key}`);
  let $buttons = html.find('.roll-button');

  // **** Derive the actual total amount, the currently displayed total amount, and the value of the die.
  const total = html.find('.part-total')[0].dataset.key;
  const selectedTotal = parseInt(html.find('.part-total')[0].innerHTML);
  const value = parseInt($button[0].innerHTML);

  // **** Initialize edge cases.
  const flagNum = html.find('.roll-button__flag').length;
  const noFlag = flagNum == 0;
  const allFlag = (flagNum == $buttons.length-1) && !($button.hasClass('roll-button__flag'));

  let result = 0;
  if (noFlag) {
    // *** Edge case #1: all dice are being read. Clicking any die toggles it on and toggles all others off.
    $buttons.addClass('roll-button__flag');
    $button.removeClass('roll-button__flag');
    result = value;

  } else if (allFlag) {
    // **** Edge case #2: only one die is being read. Clicking that die toggles all dice on, instead of toggling the last die off.
    $buttons.removeClass('roll-button__flag');
    result = total;

  } else {
    // **** If the circumstances do not meet the edge cases, proceed as usual. Clicking a die will toggle it on or off.
    if ($button.hasClass('roll-button__flag')) {
      $button.removeClass('roll-button__flag');
      result = selectedTotal + value;
    } else {
      $button.addClass('roll-button__flag');
      result = selectedTotal - value;
    }
  }

  // **** Finalize the data object and pass it to update().
  // **** update() belongs to the ChatMessage instance, where it'll update itself and push the update to the server.
  html.find('.part-total')[0].innerHTML = result;
  data.content = html[0].outerHTML;
  await message.update(data);
}