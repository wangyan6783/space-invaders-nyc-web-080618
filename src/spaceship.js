class Spaceship {
  constructor (name, crew, phasers, shields, cloaked=false, warpDrive="disengaged", docked, phasersCharge="uncharged") {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = cloaked;
    this.warpDrive = warpDrive;
    this.phasersCharge = phasersCharge;
    if (crew.length > 0){
      this.crew = crew;
      for (let member of crew){
        member.currentShip = this
      }
      this.docked = false
    }else{
      this.docked = true
    }
  }
}
