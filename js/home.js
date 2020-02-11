var draggedItem = null;
var players = null;

document.addEventListener('dragstart', function(event) {
  draggedItem = event.target;
  console.log(draggedItem.children)
  event.dataTransfer.setData('text/plain', null);
  event.dataTransfer.setDragImage(self.draggedItem.children[0],0,0);
});

document.addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.addEventListener('dragleave', function(event) {
});

document.addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.parentNode.nextSibling == draggedItem) {
      event.target.parentNode.parentNode.insertBefore(draggedItem, event.target.parentNode);
    } else {
      event.target.parentNode.parentNode.insertBefore(draggedItem, event.target.parentNode.nextSibling);
    };
});

window.onload = function() {
  var players = document.getElementsByClassName("players");
};
