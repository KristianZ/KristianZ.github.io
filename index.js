var projects_json = {
    "bike": {
        "title": "Wearable for Bikers",
        "category": "design",
        "link-text": "Learn More",
        "content": "For my midterm and final projects at NYU's Wearables Course, I developed wearable technology for bicyclists. The first version of the project tracked the arm gestures of the bicylists and translated them into turn signals embedded into the back of a shirt. This initial iteration experimented with using the body to track and display data. While technologically, this was interesting, for the second iteration I prioritized the role of the wearer. I created a wearable that helps the bicyclists better embody the role of a vehicle when on the road. I want other vehicles to better recognize that a bicyclist is also a vehicle just like an automobile. Moreover, I want bicyclists to more closely feel as if they are taking on the role of a vehicle.<p></p><a href='https://wp.nyu.edu/tandonschoolofengineering-kristianz/week-15-project-2/'>Version 2: Click here for pictures and a detailed breakdown.</a>.<p></p>In version 1, when the biker outstretches their (left) arm it signals a left turn. If the biker raises their arm at ninety degrees, it signals a right turn. Holding either position keeps the blinkers on while any other position disables them. For gesture detection, I sewed an Arduino Nano 33 BLE to an armband located on the forearm. Conveniently, the Arduino has an 9-axis IMU sensor of which I used acceleration and gyroscope values to detect (a) whether the arm was up and (b) whether the arm was signaling a left or right turn. The armband also houses a battery. From the armband, I ran wires through the sleve and soldered them to LEDs. The wires and LEDs were then sewn onto the inside of the longsleeve shirt.<p></p><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/OQslF1Oaszg?rel=0' allowfullscreen></iframe></div><p></p>"
    },
    "rooftop": {
        "title": "Rooftop Garden - Short Film",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/oWrKqLv8ASs"
    },
    "esaul": {
        "title": "Esaul - Teaser Trailer",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/EA1-RYAI55c"
    },
    "character": {
        "title": "Introducing a Treasure Hunter",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/7ZwJYa21LyQ"
    },
    "mocap": {
        "title": "Imagining Motion",
        "category": "film",
        "link-text": "Watch Video",
        "content": "https://youtu.be/AUmVbxDES04"
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
    "nyc": {
        "title": "NYC Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/n3omEEZnCMAYJLNW8"
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
        "title": "Rose-Hulman Institute of Technology Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/H53BkgSF8eYNT6Y16"
    },
    "capstone": {
        "title": "Wearable for Injury Prediction",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "I completed my senior project as part of a Multidisciplinary Capstone class, which was with students from different majors. Two others and I created a system that recorded running mechanics so that the data could be used to predict running-related injuries. Focusing on the latter, we began by researching the minimal running factors that might lead to injury. We read near thirty research publications and interviewed another ten coaches, trainers, and biomechanics professors from Rose-Hulman Institute of Technology and Indiana State University. However, as one coach phrased it, \"We are in the dark ages for understanding how running and injury are connected.\" In reality, experts are able to effectively predict the cause of an injury yet cannot predict a cause before injury occurs. This is because while our bodies are structured very similarly, each one responds to movement quite differently. For instance, two runners with the same running style yet different strength legs may produce injury in different locations of the body when spraining their ankle. The problem becomes more complex when considering that components of our body are incredibly interconnected. One's lower back and even arms can alter how one's foot impacts the ground. These factors make it quite difficult for researchers to confidently predict correlation between running and injuries.<p></p>The difficulty for researchers to predict running injuries only emphasized the importance for a product that records running mechanics. The team believed machine learning could find correlation when supplied an abundance of running data. So, the team pivoted in search for important running mechanics to record. Comments from our previous research suggested the importance of hip, knee, and foot movement in addition to foot impact. However, because of the uncertainty of these suggestions, we intended to conduct our own human-subject research. We spent the better-half of two months completing IRB paperwork and planning experiments with runners on a force mat. However, prior to submitting our paperwork the COVID-19 pandemic hit the United States, separating students from their schools and our team from its resources. Paired with the institution's expectation that capstone projects develop prototypes, the team was force dto make design decisions on a final product.<p></p>Our final design consisted of a foot wearable that communicated with a smartphone. The foot wearable hosted a 6-axis motion sensor on the shoe lace for recording motion and an impact sensor as an insole. A tiny Arduino-based microcontroller united the peripherals and sent commands over BLE to a smartphone. The smartphone application was extensively implemented to operate like a standard running-recording app. It even stored the running data to a database. I was responsible for designing and developing the motion sensor, microcontroller, and smartphone application. Aside from the impact sensor, all aspects of the project were successful implemented."
    },
    "eml": {
        "title": "Implementing Background Blur",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Embedded Machine Learning, I designed and implemented a system that blurred the background of individuals in a picture. The direction of the blur was based on the direction of the person's head. The program first extracts potential head regions using thresholding. Then, it uses PCA to classify the potential regions as a head. These classified head regions are the foreground. Thresholding is used once more to obtain the centroid of the foreground and the head itself. From that, a blur direction is determined. MatLab was used to obtain training coefficients while an NVidia Jetson Nano running Python operated the final program. The training set consisted of forty images under different color lighting and different head angles."
    },
    "cvision": {
        "title": "Detecting Key-press from a Picture",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Computer Vision, a partner and I designed and implemented a MatLab program that identifies a key press from an image. Using thresholding, a finger was extracted from the image. The hand's centroid and orientation were used to determine the point at the tip of the finger. Then, the keyboard was extracted using thresholding, morphologies, and a convex hull. Using points at the edge of the keyboard, an affine transformation was applied to the image and finger point. Finally, the ratio of the location of the transformed point to that of the keyboard was compared to a pre-defined grid to obtain the key being pressed."
    },
    "imagerec": {
        "title": "FRC Target Identifier",
        "category": "engineering",
        "link-text": "Learn More",
        "content": "For my final project in Image Recognition, three others and I designed and implemented a MatLab program that identifies the angle and distance to a target. Using an underexposed image, thresholding was applied to extract potential target regions. Small images were then created from large, continuous pixel regions. The small images were passed through a Hausdorff Template matching algorithm to determine whether they were indeed a target. If the small image was a target, then, the distance from the centroid to the edges was used to determine the angle while the total number of pixels was compared to a curve fit to determine the distance. The team achieved a 97% accuracy among 200 images."
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
    "track": {
        "title": "Track and Field",
        "category": "extracurricular",
        "link-text": "Learn More",
        "content": "I spend a lot of time practicing the sport of Track and Field. While I'm a sprinter and pole vaulter first, I've completed the heptathlon once, and I'm currently training for the decathlon. My Track and Field experiences have led me to appreciate its many physical feats and love the sport so much more.I've never had an opportunity to share my track accomplishments, but I'm really proud of them and wish to share them somewhere.<p></p><strong>Rose-Hulman</strong> - Conference champion in the 200m, 4x200m, and 4x400m. Conference runner-up in the 400m and 4x200m. Conference scorer in the pole vault (5 times), the 4x400m relay, and the 400m hurdles.<p></p><strong>High School</strong> - State qualifier in the 4x200m and 4x100m relays. Conference scorer in the pole vault, 55m dash, 4x100m, and 4x200m."
    },
    "abroad": {
        "title": "Study Abroad in Rome, Italy",
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

var content = $("#content")

$.each(projects_json, function(key, value) {
    project = $("#" + value['category'] + "-projects")
    if(value['content'].startsWith("http")) {
        project.append('<div class="col-auto p-0"><div class="hovereffect"><img class="img-responsive" src="./images/Thumbnails/' +
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
        project.append('<div class="col-auto p-0"><div class="hovereffect"><img class="img-responsive" src="./images/Thumbnails/' +
            key +
            '.jpg"><div class="overlay ' +
            value['category'] +
            '"><h2>' +
            value['title'] +
            '</h2><button class="info" data-toggle="modal" data-target="#' +
            key +
            'Modal">' +
            value['link-text'] +
            '</button></div></div></div>')
        content.append('<div id="' +
            key + 
            'Modal" class="modal fade"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">' +
            value['title'] +
            '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body lead">' +
            value['content'] +
            '</div><div class="modal-footer"></div></div></div></div>'
        )
    }
})

/* Sample appended HTML

<div class="col-auto p-0">
    <div class="hovereffect">
        <img class="img-responsive" src="images/Thumbnails/abroad.jpg">
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
