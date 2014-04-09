var stage = new Kinetic.Stage({
            container: 'container',
            width: 578,
            height: 600
          });

          var layer = new Kinetic.Layer();

          var redLine = new Kinetic.Line({
            points: [73, 70, 340, 23, 450, 60, 500, 20],
            stroke: 'red',
            strokeWidth: 15,
            lineCap: 'round',
            lineJoin: 'round'
          });
          redLine.move({x:0,y:5});
        greenLine.move({x:0,y:55});
        blueLine.move({x:0,y:105});

        layer.add(redLine);
        stage.add(layer);