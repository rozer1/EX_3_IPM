      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      function spawnBox(stage, layer) {
        var rectX = stage.width() / 2 - 50;
        var rectY = stage.height() / 2 - 25;
        var color = getRandomColor();
        var box = new Konva.Rect({
          x: rectX,
          y: rectY,
          width: 50,
          height: 50,
          fill: color,
          stroke: 'black',
          strokeWidth: 4,
          draggable: true,
        });
        layer.add(box);
        box.on('mouseover', function () {
          document.body.style.cursor = 'pointer';
        });
        box.on('mouseout', function () {
          document.body.style.cursor = 'default';
        });
        return box;
      }

      var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });
		
		var layer = new Konva.Layer();
		spawnBox(stage, layer);
		spawnBox(stage, layer);
		spawnBox(stage, layer);
       
      stage.add(layer);