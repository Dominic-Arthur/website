<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Dominic Arthur">
  <title>D. Arthur</title>
  <noscript>
    <p><strong>This web page requires JavaScript to be enabled.</strong></p>
    <p>JavaScript is an object-oriented computer programming language 
    commonly used to create interactive effects within web browsers.</p>
    <p><a href="https://goo.gl/koeeaJ">How to enable JavaScript?</a></p>
  </noscript>
  <script src="script.js" defer></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="headerstyle.css"/>
  <link rel="stylesheet" href="mainstyle.css"/>
  <link rel="stylesheet" href="footerstyle.css"/>
  <link rel="stylesheet" href="gallerystyle.css"/>
  <link rel="stylesheet" href="aboutstyle.css"/>
  <link rel="stylesheet" href="progressstyle.css"/>
  <link rel="stylesheet" href="blogstyle.css"/>
</head>

<body>

  <header class="header" id="header">
    <div class="b-img">
      <h1 class="logo">D.ARTHUR</h1>
    </div>

    <nav class="navcontainer">
      <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#progress">Progress</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div class="panelcontainer">
      <div id="mySidepanel" class="sidepanel">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#home" onclick="closeNav()">Home</a>
        <a href="#blog" onclick="closeNav()">Blog</a>
        <a href="#about" onclick="closeNav()">About</a>
        <a href="#gallery" onclick="closeNav()">Gallery</a>
        <a href="#progress" onclick="closeNav()">Progress</a>
        <a href="#contact" onclick="closeNav()">Contact</a>
      </div>
      <button class="openbtn" onclick="openNav()" id="openbtn">&#9776;</button>
    </div>
  </header>

  <main class="main">
    <section class="home" id="home">
      <div class="grid-container">
        <div class="sideline" id="topline"></div>
        <div class="sideline" id="leftline"></div>
        <div class="sideline" id="bottomline"></div>
        <div class="sideline" id="rightline"></div>
        <div class="abouttext">
          <div class="intro">
            <p class="greetings">Hi!</p>
            <p class="introtext">I'm Dominic, an aspringfreelance web developer<br> and photography enthusiast.</p>
          </div>
          <p class="paragraph">Do you need a website for your business or portfolio? 
          Well, I've got your back. Let me help you with a stunning professional
          look website while you focus on what you do best.</p>
        </div>
      </div>
    </section>

    <section class="gallery" id="gallery">
      <div class="mygallery">
        <h2>Gallery</h2>
        <p><i>THE WORLD LOOK A LOT MORE BEAUTIFUL THROUGH THE LENSE.</i></p>
        <img src="images/logo.jpg" alt="My Mhotography Logo" width="1500" height="535">
      </div>

          <!--Gallery Modal-->
      <div id="myModal" class="modal">
        <span class="closemodel" onclick="closeModel()">&times;</span>
        <img class="modal-content" id="modal-image">
        <p class="caption" id="caption"></p>
      </div>

      <div class="imgcontainer">

        <div class="column">
          <img src="images/img1.jpg" alt="portobello beach" onclick="modalFunction(this)">
          <img src="images/img2.jpg" alt="panoramic view of Arthur's seat" onclick="modalFunction(this)">
          <img src="images/img3.jpg" alt="Road bordered by trees" onclick="modalFunction(this)">
          <img src="images/img4.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img5.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img25.jpg" alt="test" onclick="modalFunction(this)">
        </div>

        <div class="column">
          <img src="images/img6.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img7.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img8.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img9.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img10.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img23.jpg" alt="test" onclick="modalFunction(this)">
        </div>

        <div class="column">
          <img src="images/img11.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img12.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img13.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img14.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img15.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img24.jpg" alt="test" onclick="modalFunction(this)">
        </div>

        <div class="column">
          <img src="images/img21.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img17.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img18.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img19.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img20.jpg" alt="test" onclick="modalFunction(this)">
          <img src="images/img22.jpg" alt="test" onclick="modalFunction(this)">
        </div>
      </div>
      <button class="gallery-button">
      <a href="https://www.instagram.com/da_fotografy/" target="_blank">SEE MORE</a>
      </button>
    </section>

    <section class="about" id="about">
      <div class="aboutflex">
        <div class="image">
          <img src="images/me.jpg" alt="photo of me" width="681" height="696">
        </div>
        <h2>About Dominic</h2><hr/>
        <p>Dominic Arthur is a second year Immunology with Management student at The University of Edinburgh and an aspiring freelance web developer. His hunger for knowledge and determination to turn ideas into action drives him to take interest in different aspects of life. Aside from his quest to acquire multiple skills, Dominic loves to play football, workout, dance, listen to music and, hangout with friends to be both physically and mentally healthy. I almost forgot!, Dominic have recently taken interest in boxing and he have signed up for boxing classes. He also likes to be creative, so Dominic do photography as a hobby.<br/><br/>Dominic developed this website without using any of the web development frameworks like W3.CSS, Bootstrap, Vue, etc in other to showcase his level of competence with the three main web development technologies, that is JavaScript, CSS and, HTML.  As of now, Dominic is expanding his knowledge on different aspects of web development and at the same time working on his photographic skills.<br/><br/><i> All in all, Dominic like to describe himself as an inquisitive young man of few words.</i></p>
      </div>
    </section>

    <section class="progress" id="progress">
      <h2>Work in progress.</h2>
      <div class="skills">
        <p>HTML</p>
        <div class="container">
          <div class="skill html">80%</div>
        </div>
        <p>Python</p>
        <div class="container">
          <div class="skill pyth">75%</div>
        </div>
        <p>CSS</p>
        <div class="container">
          <div class="skill css">65%</div>
        </div>
        <p>Javascript</p>
        <div class="container">
          <div class="skill js">50%</div>
        </div>
      </div>
    </section>

    <article class="blog" id="blog">
      <h2>D. Arthur's Blog</h2>
      <p>It is always good to express views, thoughts and ideas in writing.</p>
      <div class="blog-container">
        <div class="blogpost">
          <img src="images/blogimg.jpg" class="blogimg">
          <h3 class="blogtle" id="blogtle">A Photograph Worth a Thousand Words.</h3>
          <p class="blogdte"><b>June 1st 2020</b></p>
          <p class="blogart">
            I have recently found myself in the world of photography and it is incredibly fascinating. Every photograph freezes a moment and tells a story. A moment you will always relive in anytime you look back at that picture. I find it interesting how light, shadows and shades of colours come together to convey some sort of unexplainable feeling in an image. Today I share with you one of my favourite photographs I have shot since I began to look at the world through my lens. </p>
          <p class="blogart">
            The person in the picture is sitting in the dark on the edge of a cliff looking at a source of light from miles away. The hope of the rising sun brings to us a fleeting moment of faith, love and trust. Every night we go to sleep trusting that we will wake up and live through another day.</p>
          <p class="blogart">This is the story I want this photograph to convey or tell.<button class="blogbtn" id="expand" onclick="expandFunction()">expand</button></p>

          <div class="para-container" id="para-container">
            <p class="blogart">
              Think of it like this, imagine you are the person in the picture and the source of light is something you have always dreamed of. This could be anything, a new job, a degree, a new car, a life partner, etc. In the photograph, the only thing that is separating the person from the light is a massive river. Nevertheless, he can get to the light, either by swimming, by boat or by flight, the same way you! can make your that dream comes true. The different ways the person could get to the light has their own risks and hurdles. For instance, if he decides to swim, he might have to learn how to swim. Even if he can swim, he cannot be certain about what to expect in the river There could be sharks or something that pose a threat or that will make the journey difficult. The same applies to you. Oftentimes, knowing they way to your destination is not enough. However, with 'knowing' comes hope and courage. And with hope and courage, one can make the impossible possible.</p>
           <p class="blogart">
              I hope you find some inspiration from this short message. Of course, people see things from different perspectives so your story from this photograph might be different from mine and I would love to hear yours :) Thanks for reading this far.<button class="blogbtn" id="collapse" onclick="collapseFunction()">collapse</button></p>
          </div>
        </div>
      </div>
    </article>
  </main>

  <footer class="footer">
    <a href="#header" class="footlink"><i class="fa fa-arrow-up"></i>To the top</a>
    <div class="contact" id="contact">
      <p>You can contact me on <b>+44-73954141619</b> or on any of the following platforms</p>
  
      <a href="https://www.facebook.com/d.arthur.101/" target="_blank" class="contactlink">
        <i class="fa fa-facebook-official"></i>
      </a>
  
      <a href="https://www.instagram.com/da_fotografy/" target="_blank" class="contactlink">
        <i class="fa fa-instagram"></i>
      </a>
  
      <a href="www.linkedin.com/in/dominic-arthur" target="_blank" class="contactlink">
        <i class="fa fa-linkedin"></i>
      </a>
    </div>
    <p class="copyright"><i><small>&copy 2020 Dominic Arthur All Rights Reserved</small></i></p>
  </footer>

</body>
</html>
