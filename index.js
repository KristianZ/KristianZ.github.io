var projects_json = {
    "title": {
        "title": "Project1",
        "img-path": "./images/Home/Projects.jpg",
        "link-text": "Text link",
        "content": "Here's a beautiful description"
    },
    "title2": {
        "title": "Project2",
        "img-path": "./images/Home/Projects.jpg",
        "link-text": "Text link",
        "content": "Here's a beautiful description"
    },
    "title3": {
        "title": "Project3",
        "img-path": "./images/Home/Projects.jpg",
        "link-text": "Text link",
        "content": "Here's a beautiful description"
    }
}

var projects_row = $("#projects")

$.each(projects_json, function(key, value) {
    projects_row.append('<div class="col-auto p-0"><div class="hovereffect"><img class="img-responsive" src="' +
        value['img-path'] +
        '"><div class="overlay"><h2>' +
        value['title'] +
        '</h2><button class="info" data-toggle="modal" data-target="#' +
        key +
        'modal">' +
        value['link-text'] +
        '</button><div id="' +
        key + 
        'modal" class="modal fade"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' +
        value['title'] +
        '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body">' +
        value['content'] +
        '</div><div class="modal-footer"></div></div></div></div></div></div></div>'
    )
});

/* Sample appended HTML

<div class="col-auto p-0">
    <div class="hovereffect">
        <img class="img-responsive" src="images/Home/Projects.jpg">
        <div class="overlay">
            <h2>Hover effect 5</h2>
            <button class="info" data-toggle="modal" data-target="#modal1">
                link here
            </button>
            <div id="modal1" class="modal fade">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
*/
