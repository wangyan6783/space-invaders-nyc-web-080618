class CrewMember {
  constructor (position, currentShip){
    this.position = position
    this.currentShip = currentShip
    if (!this.currentShip) {
      this.currentShip = 'Looking for a Rig'
    }
  }
  chargePhasers(){
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
    if (this.position === "Gunner"){
      this.currentShip.phasersCharge = "charged"
    } else {
      this.currentShip.phasersCharge = "uncharged"
    }
  }
  engageWarpDrive(){
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
    if(this.position === "Pilot"){
      this.currentShip.warpDrive = "engaged"
    } else {
      this.currentShip.warpDrive = "disengaged"
    }
  }
  setsInvisibility(){
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
    if(this.position === "Defender"){
      this.currentShip.cloaked = true
    } else {
      this.currentShip.cloaked = false
    }
  }
}
