var projects_json = {
    "thriller": {
        "title": "\"Thriller\" with Facial Expressions",
        "category": "ar",
        "link-text": "Learn More",
        "content": "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/q9wKSdWYoCI?rel=0' allowfullscreen></iframe></div><p></p>I was really excited the week we jumped into LensStudio in my Mobile Augmented Reality class at NYU. I've heard of tools such as LensStudio and SparkAR, and I felt this was the perfect time for me to familiarize myself with one of these tools. We were tasked with creating a simple, facial AR filter, yet I wanted to do much more than that. Browsing through the template projects, I learned that one can create a model with blendshapes. As the user alters their facial expression, for instance closing their mouth, the corresponding model will transition between a base blendshape and a mouth-closed blendshape. I envisioned these actions as inputs to a performance. As the user performs actions using their face, changing blendshapes enhance the experience.<p></p>Unfortunately, I misunderstood how blendshapes worked. As I experimented in Maya, I wanted to take two different meshes and blend between them. For instance, the face of ghost will warp into the face of a werewolf as the user closes their mouth, but this is difficult if not impossible. I learned that blendshapes must maintain the same topology (i.e. same number of vertices and edges), which different models almost never share. Most artists will copy a base mesh and tediously manipulate edges and vertices to get a desired look. I even went as far as trying to share topologies using a primitive sphere by taking it and wrapping around my meshes. Yet, this proved frusturating as the sphere would never trully work like the original and it would maintain reference to the original mesh.<p></p>Feeling defeated, I returned to the template projects only to find one on facial triggers, a much simpler version of my goal. Some facial triggers included the start and stop of smiling, kissing, opening mouth, tapping screen, and raising eyebrows. Meanwhile, halloween was approaching, and I was listening to a remix of Michael Jackson's \"Thriller\", prompting me to design-map these facial actions to objects: smiling-Joker, mouth-zombie, kiss-werewolf, and eyebrows-lights. Later, I would try to implement the Joker's hair as a 3D asset, but due to difficulty in adjusting hair transparency I decided to replace the Joker with a cleaner, theater mask. Similarly, due to unreliable triggering of the kissing action, I replaced the werewolf trigger with screen tapping.<p></p>I was happiest when experimenting with scripting in LensStudio using Javascript. For the longest time, I wanted to tie my Bachelor's in Computer Engineering to my Master's in Integrated Design and Media, and programming effects for an augmented reality experience satisfied that. This began because the scripts from the template project lacked the inputs I wanted for my project. I wanted to define show and hide triggers for my meshes as well as make it scalable for a various types of facial visuals. Consequently, I was all over Snapchat's documentation, looking at using tweens, manipulating material passes, and even conducting rotational transformations in 3D space.<p></p>I came to the last one because I realized a fundamental component of the song \"Thriller\" are the hands. So, I planeed to activate the hands based on the rotation of my eyes passing certain thresholds. After experimentation, I defined the thresholds according to the dot product between my eyes and ground (right) plane. I then created the hands by finding a rigged model and making manual adjustments in Maya. I also needed to re-map textures in hypershade (same for the werewolf) and finally smooth the mesh by increasing the number of edges because the arms were extremely low-poly.<p></p>Alongside all the fun I had making the project, my classmates found the final result entertaining. I also got very valuable feedback, as they noted that I could have enhanced the performance with more exagerated emotions and movements. Perhaps the next steps for this project would be improving the quality of the assets while decreasing their file sizes. For instance, the werwolf mesh is low-poly of the entire animal, but I only need a higher-resolution of the head."
    },
    "hulk": {
        "title": "Motion Captured Hulk Buddy",
        "category": "ar",
        "link-text": "Learn More",
        "content": "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/V9IjMpd4hQA?rel=0' allowfullscreen></iframe></div><p></p>While studying Mobile Augmented Reality at NYU, one of our weekly assignments challenged us to pitch an AR experience using motion capture. I remember my professor praising the amazingness of motion capture because one can use it to pretend they are the Hulk (from Marvel comics and films). I imagined what silly motions I could conduct the Hulk to do, and consequently decided to find entertainment using augmented reality by illustrating the Hulk performing fluid or technically complex motions. I think this contrast is funny because the Hulk, a character who is normally very strong and muscular, doesn't need to act normal. Audiences expect the Hulk to crash and muscle his way through tasks, and I wanted to subvert that for comedic effect.<p></p>The most time consuming portion of this project was not the motion capture but the Hulk rig. I found a free Hulk model online that included every possible body, hand, skin, and face rigging one can comprehend. Such a rig was beyond the complexity I wanted, so I worked on simplifying it. First, I imported the model into Unreal Engine, my preferred software, which removed the rigs and allowed me to retexture the mesh. However, I learned that I could not embed the textures upon export, so effectively Unreal Engine just removed the rigs. Next, I re-rigged the model using Adobe's easy-to-use Mixamo software. I also used Mixamo to switch the rig from A-pose to T-pose to match the starting pose of my future motion captures. Finally, I brought the model into Maya where I used hypershade to re-map the textures. Importantly, I deleted an invisible duplicate of the mesh that existed overlayed on the actual mesh.<p></p>With the model created, I planned and motion captured three sample movements of my imagined Hulk buddy. The first motion mimicked a child pretending to be an airplane. The second motion was the fluidness of a dancer. The last motion was the technical competence of a track hurdler. In the motion capture studio, I collaborated with several students and even assisted them by performing their desired motions. To record the motions, we used Motive OptiTrack alongside OptiTrack's infrared camera hardware. After exporting the motions as an FBX, I used Maya to map the motion onto my Hulk rig. Finally, I used Adobe Aero to input into the real world the Hulk with my motions.<p></p>Motion capture is undoubtedly a lot of fun, and I also developed a new appreciation for the difficulty of acting. While I was happy with the final product, the glossiness of the Hulk really bothered me. Unfortunately, this was due to the a limitation in Adobe Aero and controlling textures and lighting. I felt as if the Hulk looked really good, comparable to the Hulk from the Marvel Cinamatic Universe, prior to importing into Adobe Aero. Had the clothing, skin, and hair shared similar reflectiveness and roughness to the real-life counterparts, the experience could have been that much better."
    },
    "magazine": {
        "title": "Vaulter Magazine in Augmented Reality",
        "category": "ar",
        "link-text": "Learn More",
        "content": "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/r9CHia-8fL0?rel=0' allowfullscreen></iframe></div><p></p>My first assignment in Mobile Augmented Reality at NYU tasked me with augmenting print media. I immediately thought to create an experience based on my background and passion for track and field, specifically the pole vault. I originally imagined world records coming to life when users would scan the print media. For instance, one would be able to see the pole vault world record play out in actual scale. I also thought to do the same for the shot put and long jump world records. Nonetheless, I quickly learned that this would be impractical. Firstly, this would constrain the viewer to only use the experience in large, open spaces. Secondly, tracking technology for our introductory software was limited to images and could not keep virtual assets locked in place in the real-world.<p></p>Consequently, I turned to a user experience that would inform the users about the cover. I chose Vaulter's Magazine Tokyo 2020 edition, which illustrates on the cover the Tokyo 2020 Olympic pole vault medalists. I imagined the athletes fading away to reveal their greatest feats behind them (their past achievements). The viewer could then go through and watch these achievements. To ensure engagement in this fast-paced world, I maintained that the videos should be brief, including only video and audio that was necessary to \"wow\" the viewer.<p></p>Obtaining the assets proved quite time-consuming. I used my limited photoshop knowledge to cut out each athlete and save them as a new image with a transparent background. I also recreated the blue-white background behind them and added a prompt to guide the viewer as to what they were experiencing (\"Who are the medalists?\"). Each brief video was compiled myself by transforming audio and video snippets from a variety of existing media on YouTube. This was crucial because media sources needed to match a high level of excitement and clarity. During this time, I also had the idea to blast the viewer with the Olympic theme to mirror the surge of adrenaline an athlete might experience.<p></p>The software I used to compile everything is called Blippar. It allows users to upload an image and create a 2D or 3D animation on top of it. Then, the user receives a test code that they can input on the mobile app. The mobile app allows the user to test their animation in augmented reality. While using Blippar, I was reminded that this would be a 3D experience. I took my idea of fading away the athletes and added dimensionality by having them \"explode\" off the page. Additionally, I put each video on a podium that was color-coded to match the athlete's medal.<p></p>The reaction I received from my class and professor made me feel that I successfully captured their attention. I usually assume most are not as engaged in track and field comapred to me, and thus this AR experience would not appeal to them. Despite this, my class responded with engagement and interest. Importantly, I also received feedback on the user interface of my design, mainly the color-scheme. Accessibility was an important factor for some students, and they encouraged me to look into that for future projects."
    },
    "bike": {
        "title": "Wearable for Bikers",
        "category": "design",
        "link-text": "Learn More",
        "content": "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/OQslF1Oaszg?rel=0' allowfullscreen></iframe></div><p></p><div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mnV_l5ESHCs?rel=0' allowfullscreen></iframe></div><p></p>For my NYU's Wearables Course, I prototyped clothing technologies that helped bicyclists better embody the role of a vehicle when in traffic. I wanted others to better recognize that a bicyclist is also a vehicle just like an automobile. Moreover, I wanted bicyclists to more closely feel as if they are taking on the role of a vehicle.<p></p>The first prototype had turn signals embedded into the back of a shirt and an accelerometer at the wrist. When the biker outstretched their (left) arm it signaled a left turn. Holding the arm at 90 degrees signaled a right turn. Maintaining either position kept the blinkers on and any other position disabled them. To track acceleration and rotation, I sewed onto the wristband an Arduino Nano 33 BLE with a 9-axis IMU sensor. From the wristband, I ran wires through the sleve and soldered them to LEDs, which I also sewed to the inside of the shirt. A 1050 mAh battery powered the prototype.<p></p>While the initial prototype proved unique, it lacked effectiveness in making bicyclists safer. The second prototype introduced several features that improved the communication between bicyclists, wearable, and environment.<div style='line-height: 0.75;'><p></p>1. <strong>Vest design with Velcro straps</strong> that allows for flexibility in wearer size<p></p>2. <strong>Body-size buttons</strong> that allow for flexible signal-activating gestures<p></p>3. <strong>Bright turn signals</strong> that alert other vehicles of the bicyclist’s direction<p></p>4. <strong>Animated signals</strong> that continuously grab the attention of other drivers<p></p>5. <strong>Vibration motors</strong> that activate when a turn signal is enable<p></p>6. <strong>Automatic break lights</strong> that activate upon sharp deceleration<p></p>7. <strong>Reflective tape</strong> to improve the biker’s visibility to other vehicles<p></p></div>I fabricated this vest by cutting and sewing scrap clothing together. At the back was an Arduino, 6-axis IMU sensor, vibration motors, and LEDs. Wires running over the shoulder connected to the vest buttons. The buttons were made from two pads of conductive fabric separated by a paper mesh. However, had I used a foam mesh the button presses would have been more reliable. Ultimately, the second prototype better fulfilled the goal of embodying a vehicle as the characteristics of the wearable were more familiar to an automobile.<p></p><a href='https://wp.nyu.edu/tandonschoolofengineering-kristianz/week-6-project-1/'>Version 1 Documentation.</a>. <a href='https://wp.nyu.edu/tandonschoolofengineering-kristianz/week-15-project-2/'>Version 2 Documentation.</a>."
    },
    "emessage": {
        "title": "eMessage - Messaging backed by Emotion",
        "category": "design",
        "link-text": "Learn More",
        "content": "Throughout NYU's Theories of Design, Media, and Technology course, students discussed the history of contemporary artifacts from around the world through the lens of users, designers, and philosophers. However, I particularly took interest in the forms and influences of orality throughout western history as described by Walter Ong and Marshall McLuhan. My culminating project focused on how modern, digital orality provides new affordances for better emotional expression. I wanted to redesign a digital communication platform around emotion by embracing the technological affordances available in digital orality and pulling from the strenghts of past western developments of orality.<p></p>Beginning with a 3500 word paper I wrote for the class, I covered eras of orality such as primary orality, residual-manuscript orality, print culture, secondary orality, and a theorized digital orality. Without writing, speech united a physicial space by aggregating knowledge about the immediately surrounding world. Through the adoption of writing, gestures and tone became more important for reciting and abstract thought became more possible. Later, through the adoption of media technology, users and studios used effects to heighten emotions at certain moments.<p></p>From my philosophical, historical, and cultural research, I proposed a messaging platform. In it, when a user typed a message artificial intelligence algorithms built into the platform would classify the message as an emotion. The algorithms would also assign a character (two or three dimensional, fictional or nonfictional, animated person) and generate a corresponding animation to perform the message. Readers could see this animation by tapping on the messages. Importantly, algorithm suggestions would be discerned from group habits and only occasionally would societal habits be introduced for novelty. Users would maintain control over their message selections, and any deviation from suggestions would go forward to train the algorithm.<p></p>While much of the platform is inspired from the eras of orality, the decoration of messages pulls from research suggesting that a sole emoticon better contextualizes emotion and that response time best signals tone. Consequently, messages are seen as emoticons and spaced according to when they were sent. Color, shape, notifcation sound, and notifcation vibration are also configurable to present additional decorations of emotion in a message.<p></p><p style='text-align: center;'>Below is a GIF built in Adobe XD blueprinting the application.</p><p style='text-align: center;'><img style='width: 50%;' src='./images/Videos/eMessage.gif' alt='GIF illustrating eMessage features'/></p>"
    },
    "apartment": {
        "title": "Recreating an Apartment Virtually",
        "category": "design",
        "link-text": "Learn More",
        "content": "<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/FREqB_XW8bo?rel=0' allowfullscreen></iframe></div><p></p>When my girlfriend moved into her new apartment, she had trouble deciding what furniture to buy. Prior to any purchasing, she wanted to see the furniture placed within her apartment and create arrangments she confidently liked. To help her with that process, I recreated her apartment virtually.<p></p>While it was in beta at the time, I chose to create the apartment in Unreal Engine 5 because it better processed lighting. In the engine, I would create furniture by transforming existing assets found online. I used materials from Quixel Bridge to improve realism. Notably, the apartment was not to perfectly to scale but was close. I knew various measurements throughout the apartment, so I would size stuff according to relative measurements. For instance, I might expand a wall to be 5.3 times the length of the dishwasher. Creating furniture, updating placements, and rendering took around 5 minutes for every pass."
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
    "boomerang": {
        "title": "Boomerangs",
        "category": "photography",
        "link-text": "Let's see them!",
        "content": "<div class='row'><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang4.mp4' type='video/mp4'></video></div><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang3.mp4' type='video/mp4'></video></div><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang2.mov' type='video/mp4'></video></div><div class='col-md-4 embed-responsive embed-responsive-16by9'><video autoplay muted loop class='embed-responsive-item'><source src='./images/Boomerangs/Boomerang1.mp4' type='video/mp4'></video></div></div>"
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
    "roadtrip": {
        "title": "Chicago to California Roadtrip",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/seRWdfyJp71aqBXD7"
    },
    "kentucky": {
        "title": "Kentucky Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/zcu5MQGECrSy4uuaA"
    },
    "rhit": {
        "title": "Rose-Hulman Institute of Technology Photography",
        "category": "photography",
        "link-text": "Open Album",
        "content": "https://photos.app.goo.gl/H53BkgSF8eYNT6Y16"
    },
    "capstone": {
        "title": "Wearable for Injury Prediction",
        "category": "design",
        "link-text": "Learn More",
        "content": "In undergraduate school, I completed my senior design project as part of a Multidisciplinary Capstone class, which was with students from different majors. Two others and I created a system that recorded running mechanics so that the data could be used to predict running-related injuries. Focusing on the latter, we began by researching the minimal running factors that might lead to injury. We read near thirty research publications and interviewed another ten coaches, trainers, and biomechanics professors from Rose-Hulman Institute of Technology and Indiana State University. However, as one coach phrased it, \"We are in the dark ages for understanding how running and injury are connected.\" In reality, experts are able to effectively predict the cause of an injury yet cannot predict a cause before injury occurs. This is because while our bodies are structured very similarly, each one responds to movement quite differently. For instance, two runners with the same running style yet different strength legs may produce injury in different locations of the body when spraining their ankle. The problem becomes more complex when considering that components of our body are incredibly interconnected. One's lower back and even arms can alter how one's foot impacts the ground. These factors make it quite difficult for researchers to confidently predict correlation between running and injuries.<p></p>The difficulty for researchers to predict running injuries only emphasized the importance for a product that records running mechanics. The team believed machine learning could find correlation when supplied an abundance of running data. So, the team pivoted in search for important running mechanics to record. Comments from our previous research suggested the importance of hip, knee, and foot movement in addition to foot impact. However, because of the uncertainty of these suggestions, we intended to conduct our own human-subject research. We spent the better-half of two months completing IRB paperwork and planning experiments with runners on a force mat. However, prior to submitting our paperwork the COVID-19 pandemic hit the United States, separating students from their schools and our team from its resources. Paired with the institution's expectation that capstone projects develop prototypes, the team was force dto make design decisions on a final product.<p></p>Our final design consisted of a foot wearable that communicated with a smartphone. The foot wearable hosted a 6-axis motion sensor on the shoe lace for recording motion and an impact sensor as an insole. A tiny Arduino-based microcontroller united the peripherals and sent commands over BLE to a smartphone. The smartphone application was extensively implemented to operate like a standard running-recording app. It even stored the running data to a database. I was responsible for designing and developing the motion sensor, microcontroller, and smartphone application. Aside from the impact sensor, all aspects of the project were successful implemented."
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
