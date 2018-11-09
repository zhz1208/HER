
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
                'text':'It is her perfume.',
            },
            1: {
                'image': 'objects/perfume/p2.png',
                'text':'There is a smell of citrus.',
            },
            2: {
                'image': 'objects/perfume/p3.png',
                'text':'There is a smell of wood.',
            },
            3: {
                'image': 'objects/perfume/p4.png',
                'text':'There is a frsh smell of earth.',
            },
            4: {
                'image': 'objects/perfume/p5.png',
                'text':'There is a smell of citrus.',
            },
            5: {
                'image': 'objects/perfume/p6.png',
                'text':'There is a smell of wood.',
            },

            6: {
                'image': 'objects/perfume/p7.png',
                'text':'There is a smell of wood.',
            },
            7: {
                'image': 'objects/perfume/p8.png',
                'text':'There is a smell of citrus.',
            },
            8: {
                'image': 'objects/perfume/p9.png',
                'text':'There is a smell of wood.',
            },
            9: {
                'image': 'objects/perfume/p10.png',
                'text':'There is a frsh smell of earth.',
            },
            10: {
                'image': 'objects/perfume/p11.png',
                'text':'There is a smell of citrus.',
            },
            11: {
                'image': 'objects/perfume/p12.png',
                'text':'There is a smell of earth.',
            },
            12: {
                'image': 'objects/perfume/p13.png',
                'text':'There is a smell of wood.',
            },
            13: {
                'image': 'objects/perfume/p14.png',
                'text':'There is a smell of earth.',
            },
            14: {
                'image': 'objects/perfume/p15.png',
                'text':'There is a smell of citrus.',
            },
            15: {
                'image': 'objects/perfume/p16.png',
                'text':'There is a smell of citrus.',
            },
            16: {
                'image': 'objects/perfume/p17.png',
                'text':'There is a smell of wood.',
            },
            17: {
                'image': 'objects/perfume/p18.png',
                'text':'There is a smell of earth.',
            },
            18: {
                'image': 'objects/perfume/p19.png',
                'text':'There is a smell of wood.',
            },
            19: {
                'image': 'objects/perfume/p20.png',
                'text':'There is a smell of citrus.',
            },
            20: {
                'image': 'objects/perfume/p21.png',
                'text':'There is a smell of earth.',
            },
            21: {
                'image': 'objects/perfume/p22.png',
                'text':'There is a smell of citrus.',
            },
            22: {
                'image': 'objects/perfume/p23.png',
                'text':'There is a smell of wood.',
            },
            23: {
                'image': 'objects/perfume/p24.png',
                'text':'There is a smell of earth.',
            },
            24: {
                'image': 'objects/perfume/p25.png',
                'text':'There is a smell of citrus.',
            },
            25: {
                'image': 'objects/perfume/p26.png',
                'text':'It is empty.',
            },
        },
        'curr_state': 0,
        'max_state': 25,
    },
    'mirror': {
        'states': {
            0: {
                'image': 'objects/mirror/m1.png',
                'text':'It is her makeup mirror.',
            },
            1: {
                'image': 'objects/mirror/m2.png',
                'text':'It is you.',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'camera': {
        'states': {
            0: {
                'image': 'objects/camera/camera1.png',
                'text':'It is her camera.',
            },
            1: {
                'image': 'objects/camera/camera2.png',
                'text':'It is a photo taken at the seaside.',
            },
            2: {
                'image': 'objects/camera/camera3.png',
                'text':'It is tiramisu.',
            },
            3: {
                'image': 'objects/camera/camera4.png',
                'text':'It is the Golden Bridge.',
            },
            4: {
                'image': 'objects/camera/camera5.png',
                'text':'It is noodle soup.',
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
                'text':'',
            },
            1: {
                'image': 'objects/lamp/lamp1.png',
                'text':'',
            },
            2: {
                'image': 'objects/lamp/lamp2.png',
                'text':'',
            },
            3: {
                'image': 'objects/lamp/lamp3.png',
                'text':'',

            },
        },
        'curr_state': 0,
        'max_state': 3,
    },
    'ipad': {
        'states': {
            0: {
                'image': 'objects/ipad/ipad1.png',
                'text':'Most of them are games.',
            },
            1: {
                'image': 'objects/ipad/ipad2.png',
                'text':'It is a folder of "Cube Escape".',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'receipt': {
        'states': {
            0: {
                'image': 'objects/receipt/receipt.png',
                'text':'It is a coupon of the restaurant Dragon Beaux. It is almost expired.',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },
    'laptop': {
        'states': {
            0: {
                'image': 'objects/laptop/lap0.png',
                'text':'It is her laptop.',
            },
            1: {
                'image': 'objects/laptop/lap1.png',
                'text':'Password required.',
            },

            2: {
                'image': 'objects/laptop/lap2.png',
                'text':'You guessed it.',
            },
            3: {
                'image': 'objects/laptop/lap3.png',
                'text':'There are many travel photos in different folders.',
            },
            4: {
                'image': 'objects/laptop/lap4.png',
                'text':'It is her shopping cart at Sephora.',
            },
            5: {
                'image': 'objects/laptop/lap5.png',
                'text':'It is her recent order at Yamibuy.',
            },
            6: {
                'image': 'objects/laptop/lap6.png',
                'text':'The address bar shows taobao.com/...',
            },
            7: {
                'image': 'objects/laptop/lap7.png',
                'text':'It is her shopping cart at Google Express.',
            },
        },
        'curr_state': 0,
        'max_state': 7,
    },
    'diary': {
        'states': {
            0: {
                'image': 'objects/diary/d0.png',
                'text':'It is a notebook.',
            },
            1: {
                'image': 'objects/diary/d1.png',
                'text':'There is a lock on it. It is her diary.',
            },
            2: {
                'image': 'objects/diary/d2.png',
                'text':'She did not lock it.',
            },           
            3: {
                'image': 'objects/diary/d2.png',
                'text':'"I slept less than 40 hours the entire past week. I decide to sleep early and do not stay up. I can 早晨起来写作业。唉算了，起不来的。英语写日记效率好低"'
            },
            4: {
                'image': 'objects/diary/d2.png',
                'text':'She taped a movie ticket.'
            },

            5: {
                'image': 'objects/diary/d3.png',
                'text':'She taped a ticket of Exploratorium.'

            },
            6: {
                'image': 'objects/diary/d3.png',
                'text':'"今天下课回家又看了一晚上Friends。猪傻傻的“啊”。我废了。今晚一定要早睡，明天还要早起。唉，蠢到选早课:)"'
            },
        },
        'curr_state': 0,
        'max_state': 6,
    },
    'calendar': {
        'states': {
            0: {
                'image': 'objects/calendar/ca1.png',
                'text':'It is a calendar. But there is only one day on each page. The past days were torn down',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },

    //shelf    
    'snack': {
        'states': {
            0: {
                'image': 'objects/snack/snack1.png',
                'text':'There are many snacks.',
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
            'text':'It is a box of books.',
            1: {
                'image': 'objects/books/book1.png',
                'text':'Five of them are about game design. They are all libary books.',
            },
        },
        'curr_state': 0,
        'max_state': 1,
    },
    'emptybox': {
        'states': {
            0: {
                'image': 'objects/emptybox.png',
                'text':'It is empty.',
            },
        },
        'curr_state': 0,
        'max_state': 0,
    },
    'ramen': {
        'states': {
            0: {
                'image': 'objects/ramen/r1.png',
                'text':'This box is full of instant noodles with Chinese or Korean characters on their packages.',
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

        var object_text = objects[curr_object]['states'][curr_object_state]['text'];

        $("#object_display").css("background-image", "url(" + object_img + ")");

        $("#text_display").html(object_text);

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
    
      $("#calendar").click(function(evt) {
        curr_object = 'calendar';
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

