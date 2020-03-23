class DistanceFacts {

  //static component that generates random facts based on the distance of the asteroid

  static comparisonGenerator(d) {
    //measurements for the size of each average item in the switch statement (in meters)
    const measurements = [0.002, 1.47, 11, 8850, 21200000, 2, 150, 381, 0.1, 0.5, 0.3, 15000, 13, 1.8]
    //sum to randomly choose one of the measurements
    const randomNumber = Math.floor(Math.random() * 14)

    //turning the asteroid distance into a randomly selected measurement then fixing it to 2 decimal places.
    let m = ((d * 1000) / measurements[randomNumber]).toFixed(2)
    m = m.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    let answer
    switch (randomNumber) {
      case 0:
        answer = `This asteroid was ${m} grains of sand away`
        break
      case 1:
        answer = `This asteroid was ${m} Danny DeVitos away`
        break
      case 2:
        answer = `This asteroid was ${m} London Buses away`
        break
      case 3:
        answer = `This asteroid was ${m} Everests away`
        break
      case 4:
        answer = `This asteroid was ${m} Great Walls of China away`
        break
      case 5: 
        answer = `This asteroid was ${m} Stephen Merchants away`
        break
      case 6:
        answer = `This asteroid was ${m} Godzillas away`
        break
      case 7:
        answer = `This asteroid was ${m} Empire State Buildings away`
        break
      case 8:
        answer = `This asteroid was ${m} Mice away`
        break
      case 9:
        answer = `This asteroid was ${m} Cats away`
        break
      case 10:
        answer = `This asteroid was ${m} Cans of Pringles away`
        break
      case 11:
        answer = `This asteroid was ${m} Death Stars away`
        break
      case 12:
        answer = `This asteroid was ${m} Giant Squids away`
        break
      case 13:
        answer = `This asteroid was ${m} Giraffe Necks away`
        break

    }
    return answer
  }

}

export default DistanceFacts