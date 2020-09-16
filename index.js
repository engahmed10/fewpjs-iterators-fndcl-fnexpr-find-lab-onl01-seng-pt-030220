
const superbowlWin =(record) => {
<<<<<<< HEAD
  const response= record.find(function(winner) {
=======
  const re= record.find(function(winner) {
>>>>>>> 8674e08c2692a0fe51993f85482c45d368b41530
     return winner.result === "W"

  } )


<<<<<<< HEAD
    return  (response === undefined) ? undefined : response.year
=======
    const aa = (re === undifined) ? undefind : re.year
>>>>>>> 8674e08c2692a0fe51993f85482c45d368b41530


}

