class Formatter {
  //add static methods here

    //  takes in a string and capitalizes the first letter
    static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    //takes in a string and removes all non-alphanumeric characters
  
    static sanitize( str) {
      return str.replace( /[^A-Za-z0-9 '-]/g, '' )
    }
  
    //capitalizes all words in a sentence except pronouns
    static titleize( sentence ) {
      const exception = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let output = [];
      let wordsArray = sentence.split( " " );
  
      for ( let i = 0; i < wordsArray.length; i++ ) {
        if ( i == 0 ) {
        output.push( this.capitalize( wordsArray[i] ) )
        }
        else {
          if ( exception.includes( wordsArray[i] ) ) {
            output.push( wordsArray[i] )}
          else {
            output.push( this.capitalize( wordsArray[i] ) )}
        }
      }
      return output.join( " " );
    }
  }
