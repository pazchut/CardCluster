document.addEventListener('DOMContentLoaded', function() {
  var selectedCardIds = [];

  // Bulk Actions
  document.getElementById('selectCards').addEventListener('click', function() {
    t.cards('all').then(function(cards) {
      t.popup({
        title: 'Select Cards',
        items: cards.map(card => ({
          text: card.name,
          callback: function(t) {
            selectedCardIds.push(card.id);
            alert(card.name + ' selected!');
          }
        }))
      });
    });
    document.getElementById('actions').style.display = 'block';
  });

  document.getElementById('actionType').addEventListener('change', function() {
    var action = this.value;
    document.getElementById('listSelect').style.display = action === 'move' ? 'block' : 'none';
    document.getElementById('labelSelect').style.display = action === 'label' ? 'block' : 'none';

    if (action === 'move') {
      t.lists('all').then(function(lists) {
        var select = document.getElementById('listSelect');
        select.innerHTML = '';
        lists.forEach(list => {
          var option = document.createElement('option');
          option.value = list.id;
          option.text = list.name;
          select.appendChild(option);
        });
      });
    } else if (action === 'label') {
      t.labels('all').then(function(labels) {
        var select = document.getElementById('labelSelect');
        select.innerHTML = '';
        labels.forEach(label => {
          var option = document.createElement('option');
          option.value = label.id;
          option.text = label.name;
          select.appendChild(option);
        });
      });
    }
  });

  document.getElementById('applyAction').addEventListener('click', function() {
    var action = document.getElementById('actionType').value;
    if (action === 'move') {
      var listId = document.getElementById('listSelect').value;
      selectedCardIds.forEach(cardId => {
        t.rest('PUT', `/cards/${cardId}`, { idList: listId });
      });
    } else if (action === 'label') {
      var labelId = document.getElementById('labelSelect').value;
      selectedCardIds.forEach(cardId => {
        t.rest('POST', `/cards/${cardId}/idLabels`, { value: labelId });
      });
    } else if (action === 'archive') {
      selectedCardIds.forEach(cardId => {
        t.rest('PUT', `/cards/${cardId}`, { closed: true });
      });
    }
    alert('Action applied to ' + selectedCardIds.length + ' cards!');
    selectedCardIds = [];
  });

  // Project Grouping
  document.getElementById('groupCards').addEventListener('click', function() {
    var projectName = document.getElementById('projectName').value;
    if (!projectName) return alert('Enter a project name!');

    t.cards('all').then(function(cards) {
      t.popup({
        title: 'Select Project Cards',
        items: cards.map(card => ({
          text: card.name,
          callback: function(t) {
            t.set(card.id, 'shared', 'projectGroup', projectName);
            alert(card.name + ' added to ' + projectName);
          }
        }))
      });
    });
    document.getElementById('projectActions').style.display = 'block';
  });

  document.getElementById('viewProject').addEventListener('click', function() {
    var projectName = document.getElementById('projectName').value;
    t.cards('all').then(function(cards) {
      var projectCards = cards.filter(card => 
        t.get(card.id, 'shared', 'projectGroup') === projectName
      );
      t.popup({
        title: projectName + ' Cards',
        items: projectCards.map(card => ({
          text: card.name,
          callback: function(t) {
            t.cards('id', card.id).then(card => t.showCard(card.id));
          }
        }))
      });
    });
  });
});
