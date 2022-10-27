
const arr = [
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Recharge',
     
    },
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },];
    const arr1=[{
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },
    {
      link: require("/Users/pankajsingh/Assignment/src/assets/userr.png"),
      Title: 'Tommy Hilfiger',
     
    },
    
  ];
  
{arr.map(arr => {
    return (
      <View>
          {/* <View  style={styles.shortcuts}> */}
            <View style={styles.logos1}>
            <Image style={styles.Logo} source={arr.link} />
            </View>
           
         
        
          {/* </View> */}
          
          
        

        {/* <Text style={styles.titlecss}>{arr.Title}</Text> */}
      </View>
        );
      })}
              {arr1.map(arr1 => {
    return (
      <View>
          {/* <View  style={styles.shortcuts}> */}
            <View style={styles.logos2}>
            <Image style={styles.Logo} source={arr.link} />
            </View>
           
         
        
          {/* </View> */}
          
        

        {/* <Text style={styles.titlecss}>{arr.Title}</Text> */}
      </View>
      
    );
  })}