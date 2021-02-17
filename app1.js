
let X = 0;

    function quizInitialize() {

      $('main').html(`
        <form class="begin-before">
          <button type="submit" class="begin">Click here to begin</button>
        </form>`
        )
      $('.begin').on('click', function(e) {
        e.preventDefault();
        questionOne()
      })
    }

    function questionOne() {

      const greatSchism = {
        'A.': '1054 AD', 
        'B.': '1133 AD' ,
        'C.': '1013 AD' ,
        'D.': '930 AD'
      }

      $('main').html('<ul><h2>1. When was the Great Schism (also known as the East-West Schism)?</h2></ul>')

      $('main').append(`
        <form>
          <ul>
          <h4>On question 1 out of 5 | Current Score: ${X}/100pts</h4>
          <br>
            <button class="choice-correct"> A) ${greatSchism['A.']}</button>
          <br>
            <button class="choice"> B) ${greatSchism['B.']}</button>
          <br>
            <button class="choice"> C) ${greatSchism['C.']}</button>
          <br>
            <button class="choice"> D) ${greatSchism['D.']}</button>
          <br>
          </ul>
        </form>`)
        
          $('.choice-correct').on('click', function(e){
              e.preventDefault();
              return $('main').append(`
              <ul>
                <h3>That's correct! A is the answer. Good job!</h3>
                <button class="end-of-question">Next Question</button>
              </ul>`)
          })

          $('.choice-correct').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              questionTwo()
            })
          })

          $('.choice-correct').on('click', function(e){
            e.preventDefault();
            return X+=20
        })

          $('.choice').on('click', function(e){
            e.preventDefault();
            return $('main').append(`
            <ul>
              <h3 class="wrong">Sorry, that's incorrect. The correct answer is A.</h3>
              <button class="end-of-question">Next Question</button>
            </ul>`)
          })

          $('.choice').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              questionTwo()
            })
          })
    }



    function questionTwo() {

      const charlamagne = {
        'A.': 'Eastern Orthodox Christianity',
        'B.': 'Roman Catholicism',
        'C.': 'The Church of England',
        'D.': 'Unorthodox Judaism'
      }

      $('main').html('<ul><h2>2. What religion was Charlamagne apart of?</h2></ul>')

      $('main').append(`
        <form>
          <ul>
          <h4>On question 2 out of 5 | Current Score: ${X}/100pts</h4>
          <br>
            <button class="choice"> A) ${charlamagne['A.']}</button>
          <br>
            <button class="choice-correct"> B) ${charlamagne['B.']}</button>
          <br>
            <button class="choice"> C) ${charlamagne['C.']}</button>
          <br>
            <button class="choice"> D) ${charlamagne['D.']}</button>
          <br>
          </ul>
        </form>`)

        $('.choice-correct').on('click', function(e){
          e.preventDefault();
          return $('main').append(`
          <ul>
            <h3>That's correct! B is the answer. Good job!</h3>
            <button class="end-of-question">Next Question</button>
          </ul>`)
      })

      $('.choice-correct').on('click', function(e){
        e.preventDefault();
        return $('ul').on('click', '.end-of-question', function(e){
          e.preventDefault();
          questionThree()
        })
      })

      $('.choice-correct').on('click', function(e){
        e.preventDefault();
        return X+=20
    })

      $('.choice').on('click', function(e){
        e.preventDefault();
        return $('main').append(`
        <ul>
          <h3 class="wrong">Sorry, that's incorrect. The correct answer is B.</h3>
          <button class="end-of-question">Next Question</button>
        </ul>`)
      })

      $('.choice').on('click', function(e){
        e.preventDefault();
        return $('ul').on('click', '.end-of-question', function(e){
          e.preventDefault();
          questionThree()
        })
      })


    }

    function questionThree() {
    
      const tennisCourt = {
        'A.': 'An oath taken by members of the French Third Estate vowing to establish a Constitution of the Kingdom while in a tennis court',
        'B.': 'An oath taken by members of the clergy and the nobles to put an end to the French Revolution',
        'C.': 'An oath taken by peasants across the western seaboard of France to put an end to the feudal estate system',
        'D.': 'A goal designed to fix the agricultural and fiscal issues of the time'
      }

      $('main').html('<ul><h2>3. What was the Tennis Court Oath?</h2></ul>')

      $('main').append(`
        <form>
          <ul>
          <h4>On question 3 out of 5 | Current Score: ${X}/100pts</h4>
          <br>
            <button class="choice-correct3"> A) ${tennisCourt['A.']}</button>
          <br>
            <button class="choice3"> B) ${tennisCourt['B.']}</button>
          <br>
            <button class="choice3"> C) ${tennisCourt['C.']}</button>
          <br>
            <button class="choice3"> D) ${tennisCourt['D.']}</button>
          <br>
          </ul>
        </form>`)
        
          $('.choice-correct3').on('click', function(e){
              e.preventDefault();
              return $('main').append(`
              <ul>
                <h3>That's correct! A is the answer. Good job!</h3>
                <button class="end-of-question">Next Question</button>
              </ul>`)
          })

          $('.choice-correct3').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              questionFour()
            })
          })

          $('.choice-correct3').on('click', function(e){
            e.preventDefault();
            return X+=20
        })

          $('.choice3').on('click', function(e){
            e.preventDefault();
            return $('main').append(`
            <ul>
              <h3 class="wrong">Sorry, that's incorrect. The correct answer is A.</h3>
              <button class="end-of-question">Next Question</button>
            </ul>`)
          })

          $('.choice3').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              questionFour()
            })
          })
    }



    function questionFour() {

      const theMoors = {
        'A.': 'Approximately 350 years',
        'B.': 'Approximately 130-230 years',
        'C.': 'Approximately 900-1000 years',
        'D.': 'Approximately 700-800 years'
      }
      $('main').html('<ul><h2>4. How long did the Moors occupy the Iberian Peninsula?</h2></ul>')

      $('main').append(`
          <form>
            <ul>
            <h4>On question 4 out of 5 | Current Score: ${X}/100pts</h4>
            <br>
              <button class="choice"> A) ${theMoors['A.']}</button>
            <br>
              <button class="choice"> B) ${theMoors['B.']}</button>
            <br>
              <button class="choice"> C) ${theMoors['C.']}</button>
            <br>
              <button class="choice-correct"> D) ${theMoors['D.']}</button>
            <br>
            </ul>
          </form>`)
          
            $('.choice-correct').on('click', function(e){
                e.preventDefault();
                return $('main').append(`
                <ul>
                  <h3>That's correct! D is the answer. Good job!</h3>
                  <button class="end-of-question">Next Question</button>
                </ul>`)
            })

            $('.choice-correct').on('click', function(e){
              e.preventDefault();
              return $('ul').on('click', '.end-of-question', function(e){
                e.preventDefault();
                questionFive()
              })
            })

            $('.choice-correct').on('click', function(e){
              e.preventDefault();
              return X+=20
          })

            $('.choice').on('click', function(e){
              e.preventDefault();
              return $('main').append(`
              <ul>
                <h3 class="wrong">Sorry, that's incorrect. The correct answer is D.</h3>
                <button class="end-of-question">Next Question</button>
              </ul>`)
            })

            $('.choice').on('click', function(e){
              e.preventDefault();
              return $('ul').on('click', '.end-of-question', function(e){
                e.preventDefault();
                questionFive()
              })
            })
    }

    function questionFive() {

      const holyRomanEmpire = {
        'A.': 'Due to the Glorious Revolution',
        'B.': 'Due to the Napoleonic Wars',
        'C.': 'Due to the 100 years war',
        'D.': 'Due to the Black Death'
      }
      $('main').html('<ul><h2>5. How was the Holy Roman Empire Dissolved?</h2></ul>')

      $('main').append(`
        <form>
        <h4>On question 5 out of 5 | Current Score: ${X}/100pts</h4>
          <ul>
          <br>
            <button class="choice"> A) ${holyRomanEmpire['A.']}</button>
          <br>
            <button class="choice-correct"> B) ${holyRomanEmpire['B.']}</button>
          <br>
            <button class="choice"> C) ${holyRomanEmpire['C.']}</button>
          <br>
            <button class="choice"> D) ${holyRomanEmpire['D.']}</button>
          <br>
          </ul>
        </form>`)
        
          $('.choice-correct').on('click', function(e){
              e.preventDefault();
              return $('main').append(`
              <ul>
                <h3>That's correct! B is the answer. Good job!</h3>
                <button class="end-of-question">Next Question</button>
              </ul>`)
          })

          $('.choice-correct').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              endPage()
            })
          })

          $('.choice-correct').on('click', function(e){
            e.preventDefault();
            return X+=20
        })

          $('.choice').on('click', function(e){
            e.preventDefault();
            return $('main').append(`
            <ul>
              <h3 class="wrong">Sorry, that's incorrect. The correct answer is B.</h3>
              <button class="end-of-question">Next Question</button>
            </ul>`)
          })

          $('.choice').on('click', function(e){
            e.preventDefault();
            return $('ul').on('click', '.end-of-question', function(e){
              e.preventDefault();
              endPage()
            })
          })
    }

    function endPage() {

      $('main').html(`<h2>Your quiz score is: ${X}/100pts</h2>`)
      $('main').append(`<div class="restart-embody"><button class="restart">Click here to try again!</button></div>`)

      $('.restart').on('click', function(){
        quizInitialize()
        X=0;
      })
    }

    quizInitialize()