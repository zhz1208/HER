
var curr_object = null;


//--------------1--------------

var scenes = {
    'room': {
        'states': {
            0: {
                'image': 'scenes/room0.png',
            },
            1: {
                'image': 'scenes/room1.png',
            },
            2: {
                'image': 'scenes/room2.png',
            },
            3: {
                'image': 'scenes/room3.png',
            },
            4: {
                'image': 'scenes/room4.png',
            },
            5: {
                'image': 'scenes/room5.png',
            },  
        },
        'curr_state': 0,
        'max_state': 5,
    }
}

var objects = {
    //desk1
    'perfume': {
        'states': {
            0: {
                'image': 'objects/perfume/p1.png',
            },
            1: {
                'image': 'objects/perfume/p2.png',
            },
            2: {
                'image': 'objects/perfume/p3.png',
            },
            3: {
                'image': 'objects/perfume/p4.png',
            },
            4: {
                'image': 'objects/perfume/p5.png',
            },
            5: {
                'image': 'objects/perfume/p6.png',
            },
            6: {
                'image': 'objects/perfume/p7.png',
            },
            7: {
                'image': 'objects/perfume/p8.png',
            },
            8: {
                'image': 'objects/perfume/p9.png',
            },
            9: {
                'image': 'objects/perfume/p10.png',
            },
            10: {
                'image': 'objects/perfume/p11.png',
            },
            11: {
                'image': 'objects/perfume/p12.png',
            },
            12: {
                'image': 'objects/perfume/p13.png',
            },
            13: {
                'image': 'objects/perfume/p14.png',
            },
            14: {
                'image': 'objects/perfume/p15.png',
            },
            15: {
                'image': 'objects/perfume/p16.png',
            },
            16: {
                'image': 'objects/perfume/p17.png',
            },
            17: {
                'image': 'objects/perfume/p18.png',
            },
            18: {
                'image': 'objects/perfume/p19.png',
            },
            19: {
                'image': 'objects/perfume/p20.png',
            },
            20: {
                'image': 'objects/perfume/p21.png',
            },
            21: {
                'image': 'objects/perfume/p22.png',
            },
            22: {
                'image': 'objects/perfume/p23.png',
            },
            23: {
                'image': 'objects/perfume/p24.png',
            },
            24: {
                'image': 'objects/perfume/p25.png',
            },
            25: {
                'image': 'objects/perfume/p26.png',
            },
        },
        'curr_state': 0,
        'max_state': 25,
    },
    'mirror': {
        'states': {
            0: {
                'image': 'objects/mirror/m1.png',
            },
            1: {
                'image': 'objects/mirror/m2.png',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'camera': {
        'states': {
            0: {
                'image': 'objects/camera/camera1.png',
            },
            1: {
                'image': 'objects/camera/camera2.png',
            },
            2: {
                'image': 'objects/camera/camera3.png',
            },
            3: {
                'image': 'objects/camera/camera4.png',
            },
            4: {
                'image': 'objects/camera/camera5.png',
            },
        },
        'curr_state': 0,
        'max_state': 4,
    },

    //desk2
    'lamp': {
        'states': {
            0: {
                'image': 'objects/lamp/lamp0.png',
            },
            1: {
                'image': 'objects/lamp/lamp1.png',
            },
            2: {
                'image': 'objects/lamp/lamp2.png',
            },
            3: {
                'image': 'objects/lamp/lamp3.png',
            },
        },
        'curr_state': 0,
        'max_state': 3,
    },
    'ipad': {
        'states': {
            0: {
                'image': 'objects/ipad/ipad1.png',
            },
            1: {
                'image': 'objects/ipad/ipad2.png',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'receipt': {
        'states': {
            0: {
                'image': 'objects/receipt/receipt.png',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },
    'laptop': {
        'states': {
            0: {
                'image': 'objects/laptop/lap0.png',
            },
            1: {
                'image': 'objects/laptop/lap1.png',
            },
            2: {
                'image': 'objects/laptop/lap2.png',
            },
            3: {
                'image': 'objects/laptop/lap3.png',
            },
            4: {
                'image': 'objects/laptop/lap4.png',
            },
            5: {
                'image': 'objects/laptop/lap5.png',
            },
            6: {
                'image': 'objects/laptop/lap6.png',
            },
            7: {
                'image': 'objects/laptop/lap7.png',
            },
        },
        'curr_state': 0,
        'max_state': 7,
    },
    'diary': {
        'states': {
            0: {
                'image': 'objects/diary/d0.png',
            },
            1: {
                'image': 'objects/diary/d1.png',
            },
            2: {
                'image': 'objects/diary/d2.png',
            },
            3: {
                'image': 'objects/diary/d3.png',
            },
        },
        'curr_state': 0,
        'max_state': 3,
    },

    //shelf    
    'snack': {
        'states': {
            0: {
                'image': 'objects/snack/snack1.png',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },
    'book': {
        'states': {
            0: {
                'image': 'objects/books/book0.png',
            },
            1: {
                'image': 'objects/books/book1.png',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'emptybox': {
        'states': {
            0: {
                'image': 'objects/emptybox.png',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },
    'ramen': {
        'states': {
            0: {
                'image': 'objects/ramen/r1.png',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },

}

//--------------2--------------

function update_scene_page() {
    if (curr_scene) {
        var curr_scene_state = scenes[curr_scene]['curr_state'];

        var scene_img = scenes[curr_scene]['states'][curr_scene_state]['image'];

        $("#scene_page").css("background-image", "url(" + scene_img + ")");
    }
}


function update_object_display() {
    if (curr_object) {
        var curr_object_state = objects[curr_object]['curr_state'];

        var object_img = objects[curr_object]['states'][curr_object_state]['image'];

        $("#object_display").css("background-image", "url(" + object_img + ")");
    }
}

function init() {
    $("#room").show();
    $("#desk1").hide();
    $("#desk2").hide();
    $("#shelf").hide();
    $("#object_page").hide();

    // deactivate hotspots in room
    $("#room_desk1").hide();
    $("#room_desk2").hide();
    $("#room_shelf").hide();
}

//--------------3--------------

$(function() {

    // initialization
    init();

    //room
    $("#room").click(function(evt) {

        // change room state
        if (scenes['room']['curr_state'] < scenes['room']['max_state']) {
            scenes['room']['curr_state']++;

            // update background image
            var curr_scene_state = scenes['room']['curr_state'];
            var scene_img = scenes['room']['states'][curr_scene_state]['image'];
            $("#room").css("background-image", "url(" + scene_img + ")");

            if (curr_scene_state == scenes['room']['max_state']) {

                // activate hotspots in room
                $("#room_desk1").show();
                $("#room_desk2").show();
                $("#room_shelf").show();
            }
        } 

        evt.stopPropagation();
    });

    $("#room_desk1").click(function(evt) {
        // switch scene from room to desk 1
        $("#room").hide();
        $("#desk1").show();
    });

    $("#room_desk2").click(function(evt) {
        // switch scene from room to desk 2
        $("#room").hide();
        $("#desk2").show();
    });

    $("#room_shelf").click(function(evt) {
        // switch scene from room to desk 2
        $("#room").hide();
        $("#shelf").show();
    });

    //desk1
    $("#desk1").click(function(evt) {
        // switch scene from desk1 to room
        $("#desk1").hide();
        $("#room").show();
    });

    $("#perfume").click(function(evt) {
        curr_object = 'perfume';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#mirror").click(function(evt) {
        curr_object = 'mirror';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#camera").click(function(evt) {
        curr_object = 'camera';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    //desk2
    $("#desk2").click(function(evt) {
        // switch scene from desk 2 to room
        $("#desk2").hide();
        $("#room").show();
    });

    $("#lamp").click(function(evt) {
        curr_object = 'lamp';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#ipad").click(function(evt) {
        curr_object = 'ipad';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#receipt").click(function(evt) {
        curr_object = 'receipt';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#laptop").click(function(evt) {
        curr_object = 'laptop';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#diary").click(function(evt) {
        curr_object = 'diary';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    //shelf
    $("#shelf").click(function(evt) {
        // switch scene from shelf to room
        $("#shelf").hide();
        $("#room").show();
    });

    $("#snack").click(function(evt) {
        curr_object = 'snack';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#book").click(function(evt) {
        curr_object = 'book';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#emptybox").click(function(evt) {
        curr_object = 'emptybox';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });

    $("#ramen").click(function(evt) {
        curr_object = 'ramen';
        $("#object_page").show();
        update_object_display();

        evt.stopPropagation();
    });
    
    
    //---------------4-------------

    $("#object_page").click(function() {
        $("#object_page").hide();

        if (curr_object == 'camera'||curr_object == 'mirror'||curr_object == 'lamp'||curr_object == 'ipad'||curr_object == 'laptop'||curr_object == 'diary'||curr_object == 'book') {
            objects[curr_object]['curr_state']=0;
        }

    });

    $("#object_display").click(function(evt) {
        if (objects[curr_object]['curr_state'] < objects[curr_object]['max_state']) {
            objects[curr_object]['curr_state']++;
        }
        update_object_display();
        evt.stopPropagation();
    });




});






