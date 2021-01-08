var projects_json = {
    "mocap": {
        "title": "Motion Capture- Imagining Motion",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/AUmVbxDES04"
    },
    "character": {
        "title": "Virtual Production - Character Introduction",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/7ZwJYa21LyQ"
    },
    "infinite": {
        "title": "Infinite Loop",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/RlcZEa3OZt0"
    },
    "videos": {
        "title": "Silly Videos",
        "category": "film",
        "link-text": "Let's see them!",
        "content": "<div class='embed-responsive embed-responsive-16by9'><video controls class='embed-responsive-item'><source src='./images/Videos/RoseGrad.mov' type='video/mp4'></video></div><div class='embed-responsive embed-responsive-16by9'><video controls class='embed-responsive-item'><source src='./images/Videos/Food.mp4' type='video/mp4'></video></div><div class='embed-responsive embed-responsive-16by9'><video controls class='embed-responsive-item'><source src='./images/Videos/NewYear.mov' type='video/mp4'></video></div>"
    },
    "iceland": {
        "title": "Iceland Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/ThkXJhgNs96CaWL7A"
    },
    "kentucky": {
        "title": "Kentucky Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/zcu5MQGECrSy4uuaA"
    },
    "boomerang": {
        "title": "Boomerangs",
        "category": "photography",
        "link-text": "Let's see them!",
        "content": "<div class='row'><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang1.mp4' type='video/mp4'></video></div><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang2.mp4' type='video/mp4'></video></div><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang3.mov' type='video/mp4'></video></div></div>"
    },
    "rhit": {
        "title": "Rose-Hulman Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/H53BkgSF8eYNT6Y16"
    },
    "capstone": {
        "title": "Senior Capstone - Wearable Tech",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "I completed my senior project as part of a Multidisciplinary Capstone class, which was with students from different majors. Three others and I created a system that recorded running mechanics so that the data can be used to predict running-related injuries. We began by researching the minimal factors required to detect injuries, which included IRB paperwork to conduct our own research. Understanding that research was outside the scope of the class, we moved to design a system consisting of a wearable that communicated with a smartphone. I was responsible for designing and developing the smartphone application and wearable circuitry. The application was created using React Native. It communicated over BLE to the wearable's microcontroller. The microcontroller commmunicated with motion and force sensors. Due to the COVID-19 pandemic, project components were separated and never officially combined and tested.<p></p>This project tested my communication abilities and grew my multidisciplinary skillset. Alongside me, a computer engineer, my team consisted of a mechanical and biomedical engineer. Moreover, many of our stakeholders were coaches and runners who had little engineering experience. Because of the varying range in knowledge, this challenged me to gauge my audience more effectively. I often began ideas with high-level concepts and dove into details based on audience reaction and comfort. I learned to better communicate ideas by leveraging shared interests and experiences, such as my history as my passion for track and field. Fortunately, I continued these skills when communication became even more difficult at the start of the pandemic. Nonetheless, my ability to share complex ideas effectively has greatly improved, and along the way I learned more on biomechanics and wearable technologies."
    },
    "eml": {
        "title": "Camera Background Blur",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Embedded Machine Learning, I designed and implemented a system that blurred the background of individuals in a picture. The direction of the blur was based on the direction of the person's head. The program first extracts potential head regions using thresholding. Then, it uses PCA to classify the potential regions as a head. These classified head regions are the foreground. Thresholding is used once more to obtain the centroid of the foreground and the head itself. From that, a blur direction is determined. MatLab was used to obtain training coefficients while an NVidia Jetson Nano running Python operated the final program. The training set was comprosied of forty images under different color lighting and different head angles.<p></p>This class provided me with an opportunity to combine skills I developed throughout my undergraduate program. At the time, I was familiar with PCA, OOP, and (some) linear algebra. However, I had only read about PCA, never programmed in Python, and only conducted linear algebra problems on paper. Despite this, I looked at these topics as tools in a toolbox. I used them when I thought it was fit and consequently improved upon my problem-solving and implementation skills by understanding how different concepts can work together."
    },
    "cvision": {
        "title": "Virtual Key-press Detector",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Computer Vision, a partner and I designed and implemented a MatLab program that identifies a key press from an image. Using thresholding, a finger was extracted from the image. The hand's centroid and orientation were used to determine the point at the tip of the finger. Then, the keyboard was extracted using thresholding, morphologies, and a convex hull. Using points at the edge of the keyboard, an affine transformation was applied to the image and finger point. Finally, the ratio of the location of the transformed point to that of the keyboard was compared to a pre-defined grid to obtain the key being pressed.<p></p>I particularly enjoyed this project because it furthered my skills in image recognition by applying linear algebra concepts. Prior to this course, I had taken an image recognition course but I had not taken linear algebra. I found myself at first struggling to apply mathmatical concepts to images, yet soon after I found myself viewing images in the context of transformation and filtering. In hindsight, I enjoyed this challenge and left the class knowing there are limitless possibilities to viewing the image."
    },
    "imagerec": {
        "title": "FRC Target Identifier",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Image Recognition, three others and I designed and implemented a MatLab program that identifies the angle and distance to a target. Using an underexposed image, thresholding was applied to extract potential target regions. Small images were then created from large, continuous pixel regions. The small images were passed through a Hausdorff Template matching algorithm to determine whether they were indeed a target. If the small image was a target, then, the distance from the centroid to the edges was used to determine the angle while the total number of pixels was compared to a curve fit to determine the distance. The team achieved a 97% accuracy among 200 images.<p></p>While all the engineering concepts were interesting, I grew most in my ability to read and write research. Firstly, the class required us to conduct preliminary research by reading existing publications from scholarly sources. This is where I learned about Hausdorff Template matching. In response, I found myself implementing concepts and algorithms shared by scholarly sources. While it may seem trivial, prior to this instance I used websites such as Stackoverflow to guide solutions. Now, I realize publications can be more useful for developing ideas towards solutions.<p></p>Afterwards, the class required us to write a paper on our project as if we were preparing for publication. Importantly, this required communicating our thought-process in an understandable manner. Our decisions needed to be documented, and we needed to have complete familiarity over similar publications or publications we took inspiration from. While all tedious, the detailed communciation allowed me to have more detailed conversation with my professors and peers about my project. They were able to provide meaningful feedback, leading my to apprecaite the importance of organized writing."
    },
    "processor": {
        "title": "Processor - 16-bit, multicycle, stack, and accumulator!",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For our final project in Computer Architecture, three teammates and I designed and implemented a 16-bit, multicycle, stack and accumulator processor. To design the processor we developed a detailed register transfer language, component specifications, and test case plan. While most of the 24 instructions operated like a standard accumulator, the processor could store values to a stack. The processor was programmed using Verilog and Xilinx and implemented on an FPGA. As a wholistic test, it was able to calculate the GCD of 5040 in 3.37ms averaging 4.12 CPI at a maximum frequency of 114 MHz."
    },
    "elephant": {
        "title": "Plush-Toy Elephant",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "Prior to our year-long capstone project, groups of four students were tasked with developing a toy in two weeks. This proved difficult for everyone as many students were still taking a full course load. Our plush elephant toy was designed for autistic children over the age of four. It interfaced with a switch using a 3.5mm audio jack. When a child activates a switch, the elephant makes a noise and moves its trunk. As a Computer Engineer, I was tasked with the electrical components. I programmed an Arduino to interact with a speaker, motor, and switch. The Arduino stored the sound data in the array, while an L239D IC allowed the motor to move forward and backwards. A battery connected to a SPST switch controlled power."
    },
    "mmm": {
        "title": "Magic Music Player",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "My Embedded Devices class focused on programming a PIC using Assembly and C. For the final, a partner and I designed and created a music player controllable from internet devices. Our front-end website allowed users to submit music notes, octaves, and beats. A database saved the inputted data until retrieval from a computer. A computer would then send the data over the Bluetooth Serial Communicator to the EUSART component on the hardware. Finally, a PIC would process the command and play the music from a speaker, display it on an LCD, and blink an LED to the music. Buttons on the hardware allow the user to change the speed of their song."
    },
    "track": {
        "title": "Track and Field",
        "category": "extracurricular",
        "link-text": "Learn More",
        "content": "I spend a lot of time practicing the sport of Track and Field. While I'm a sprinter and pole vaulter first, I've completed the heptathlon once, and I'm currently training for the decathlon. My Track and Field experiences have led me to appreciate its many physical feats and love the sport so much more.I've never had an opportunity to share my track accomplishments, but I'm really proud of them and wish to share them somewhere.<p></p><strong>Rose-Hulman</strong> - Conference champion in the 200m, 4x200m, and 4x400m. Conference runner-up in the 400m and 4x200m. Conference scorer in the pole vault (5 times), the 4x400m relay, and the 400m hurdles.<p></p><strong>High School</strong> - State qualifier in the 4x200m and 4x100m relays. Conference scorer in the pole vault, 55m dash, 4x100m, and 4x200m."
    },
    "abroad": {
        "title": "Studying in Rome, Italy",
        "category": "extracurricular",
        "link-text": "Learn More",
        "content": "One of the best and most adventerous 5 weeks of my life were in Italy. In the summer of 2018, I chose to take a sociology course and a podcasting and vidcasting course in Rome, Italy. Every week, my sociology course would explore neighborhoods of Rome and discuss their history, culture, and identity. My podcasting and vidcasting course would create one or two podcasts and vidcasts every week on how to live in Rome.<p></p>On weekends, my friends and I would have fun exploring the country. I visited the Vatican several times, travelled to Ostia, Venice, Florence, Cinque Terre, Naples, Pompei, Sorrento, and Capri. I even had the opportunity to see a Killers concert! I've never had a better opportunity to connect with new people and explore a historically and culturally rich country.<p></p><a href=' https://soundcloud.com/user-730028885/sets/the-when-in-rome-show-summer'>When in Rome Show Podcast</a><p></p><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/wutJ40P0o50' allowfullscreen></iframe></div>"
    },
    "pso": {
        "title": "Polish Scouting Organization",
        "category": "extracurricular",
        "link-text": "Learn More",
        "content": "As a preschooler, my parents enrolled me into the Polish Scouting Organization. Little did I know that in addition to the fun games, I would later mentor inner-city Chicago teens to be better leaders. Alongside teaching scouting ideals and preserving Polish heritage, I would network and lead scouts from all corners of the globe. I would explore nature and learn about my planet. I'm incredibly thankful for my experiences in this organization, and I'm always wishing to give back more.<p></p>As a troop leader from 2014 to 2017, I conducted several major kayaking and winter trips per year. These trips surrounded teens in nature without technology. Trip topics taught Polish heritage, leadership, and independence. In 2015, I assisted in running the Chicago camp at the United States jamboree. In 2017, I backpacked with scouts from around the world at the global jamboree in Canada. Most recently in 2018, I organized a two week trip around Lake Michigan for the Chicago scouts.<p></p>I created a short video highlighting my 2018 trip. For my earlier experiences, a friend created several videos. Embedded are my three favorite videos.<p></p><a href='https://www.youtube.com/channel/UCjW56_sqONAZBYFt46By2mQ/videos'>More content on my friend's YouTube channel!</a><p></p><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/O__TybZLxp4?rel=0' allowfullscreen></iframe></div><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/3pXnDJVDzCA?rel=0' allowfullscreen></iframe></div><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/RUeREFjn0Bk?rel=0' allowfullscreen></iframe></div>"
    },
    "ball": {
        "title": "White and Red Ball",
        "category": "extracurricular",
        "link-text": "Learn More",
        "content": "The Legion of Young Polish Women hosts a ball at the end of every winter. The Queen of the ball is awarded to the dubutante that fundraises the most money prior to the ball. For several years now, I've volunteered as a mazur dancer. Mazur dancers dance with former dubutantes as a celebration after the Queen is crowned. For me, this  is an enjoyable volunteer event that allows me to support women and my Polish heritage.<p></p><a href='http://www.lypw.org/white-and-red-ball/'>Learn more about the ball ...</a>"
    }
}

var projects_row = $("#projects")

$.each(projects_json, function(key, value) {
    if(value['content'].startsWith("http")) {
        projects_row.append('<div class="col-auto p-0"><div class="hovereffect"><img class="img-responsive" src="./images/Thumbnails/' +
            key +
            '.jpg"><div class="overlay ' +
            value['category'] +
            '"><h2>' +
            value['title'] +
            '</h2><button class="info" data-toggle="modal" onclick="window.open(\'' +
            value['content'] +
            '\', \'_blank\')">' +
            value['link-text'] +
            '</button></div></div>'
        )
    }
    else {
        projects_row.append('<div class="col-auto p-0"><div class="hovereffect"><img class="img-responsive" src="./images/Thumbnails/' +
            key +
            '.jpg"><div class="overlay ' +
            value['category'] +
            '"><h2>' +
            value['title'] +
            '</h2><button class="info" data-toggle="modal" data-target="#' +
            key +
            'Modal">' +
            value['link-text'] +
            '</button><div id="' +
            key + 
            'Modal" class="modal fade"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' +
            value['title'] +
            '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body lead">' +
            value['content'] +
            '</div><div class="modal-footer"></div></div></div></div></div></div></div>'
        )
    }
});

/* Sample appended HTML

<div class="col-auto p-0">
    <div class="hovereffect">
        <img class="img-responsive" src="images/Home/Projects.jpg">
        <div class="overlay film">
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
