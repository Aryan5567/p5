function preload() {
}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 100, 230, 230);
    fill(250, 0, 0);
    stroke(250 ,0 , 0)
    circle(50, 50, 80);
    circle(50, 350, 80);
    circle(590, 50, 80);
    circle(590, 350, 80);
    fill(0, 250, 0);
    stroke(0, 250, 0);
    rect(90, 40, 460, 20);
    rect(90, 350, 460, 20);
    rect(90, 40, 20, 310);
    rect(540,40, 20, 310);
}

function take_snapshot() {
    save('picture.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}


