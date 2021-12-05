const extremeHotCommentaryList = [
    "I am the egg frying on the asphalt.",
    "I actually wish I were buried in an avalanche.",
    "Asphalt has a liquid state.",
    "I wish I were in Michigan during the winter.",
    "Naked is too much clothing.",
    "My eggs are being poached.",
    "Time to drink so much water you may consider a diaper."
  ];
  
  const extremeColdCommentaryList = [
    "People actually choose to live in this weather??",
    "My eyeballs are ice cubes.",
    "Does shivering count as exercise?",
    "I'll be sitting in front of the open fridge to keep warm.",
    "Well, at least there aren't any mosquitos.",
    "The word \"cold\" has lost all meaning."
  ];
  
  const standardCommentaryList = [
    [
      80,
      109,
      [
        "It's too damn hot!",
        "My steering wheel has melted off my palm prints.",
        "My body is a personal salt mine.",
        "I'm melting...MELTING...",
        "You can wash and dry your clothes at the same time.",
        "I found out that my seat belt could be used as a branding iron."
      ]
    ],
    [
      70,
      79,
      [
        "The perfect weather for a walk.",
        "It's shorts weather! Or if you're in a sissy state, definitely wear several layers!",
        "Ice cream won't melt immediately.",
        "A great time to visit the pool!",
        "Everyone in the South are definitely wearing winter coats."
      ]
    ],
    [
      60,
      69,
      [
        "It's not too hot, not too cold. It's JUUUUUUST right.",
        "The perfect weather for a walk.",
        "It's shorts weather!",
        "Mild salsa, if salsa were a temperature scale.",
        "An average spring/summer.",
        "Now is an optimal time to check if your AC is working."
      ]
    ],
    [
      50,
      59,
      [
        "Disappointing.",
        "Now is a great time for you to check if your furnace works."
      ]
    ],
    [
      40,
      49,
      [
        "The perfect time for a hot toddy.",
        "It's time for chili!",
        "The temperature runners like.",
        "A great temperature for a fall hike!",
        "Time to bring the whiskey to the football game.",
        "Seriously, check your furnace."
      ]
    ],
    [
      30,
      39,
      [
        "Flu season is here...again...",
        "The outside is my fridge.",
        "At least it isn't snowing...yet.",
        "I'm definitely going to yell at kids who aren't wearing coats outside.",
        "Time to dig out the scarves, hats, and thick socks. Ugh.",
        "This is unacceptable.",
        "If only I enjoyed skiing. Or snowboarding. Or doing any winter weather activity other than sleeping."
      ]
    ],
    [
      20,
      29,
      [
        "I wish this were my age instead of the temperature outside",
        "My nose will never stop running.",
        `"At least I don't have to put my beer in the fridge..."`,
        "The kind of cold where it just kind of makes you pissed",
        "Hope your furnace works! We literally reminded you earlier!",
        "Ok but like why",
        "The worst part of this weather is that it sticks around for a long time after you come inside",
        "Summer in Canada",
        "I wish this temperature was Celsius.",
      ]
    ],
    [
      0,
      19,
      [
        "Climate change is bad but it's fine to run your car for a couple minutes before driving",
        "Just fucking no.",
        "I'm never leaving my house.",
        "I really should move somewhere warmer.",
        "That weather where beards turn into ice collectors.",
        "My nostril hairs are icicles."
      ]
    ]
  ];
  
  function greaterThan(temperature, min) {
      return temperature >= min;
  }
  
  function between(temperature, min, max) {
      return temperature >= min && temperature <= max;
  }
  
  function lessThan(temperature, min) {
      return temperature <= min;
  }
  
  // Weather commentary
  const getExtremeHotWeatherCommentary = () => {
    return extremeHotCommentaryList[Math.floor(Math.random) * extremeHotCommentaryList.length];
  };
  
  const getExtremeColdWeatherCommentary = () => {
    return extremeColdCommentaryList[Math.floor(Math.random) * extremeColdCommentaryList.length];
  };
  
  function getStandardWeatherCommentary (temperature) {
    let commentList, comment;
    
    standardCommentaryList.forEach((item, index) => {
      if (between(temperature, item[0], item[1])) {
        commentList = item[2];
        comment = commentList[Math.floor(Math.random() * commentList.length)];
      };
    });
  
    return comment;
  };
  
  const getAlternateWeatherDescription = (temperature) => {
    const temp = Math.round(temperature);
  
    if (temp === 69) {
      return "Nice.";
    };
  
    if (greaterThan(temp, 110)) {
      return getExtremeHotWeatherCommentary();
    } else if (lessThan(temp, -1)) {
      return getExtremeColdWeatherCommentary();
    } else {
      return getStandardWeatherCommentary(temp);
    };
  };

  export default getAlternateWeatherDescription;