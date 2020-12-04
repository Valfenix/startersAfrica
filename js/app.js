const words = ["Career in Software Development.", "Skill Training in Tech.", "Kids as Top Tech Entrepreneurs.", "Employees in Quality Tech Training.", "Future with The Best Tech Community."]

let cursor = gsap.to('.cursor', { opacity: 0, ease: "power2.inOut", repeat: -1 })

let boxTl = gsap.timeline()

boxTl.to('.box', {})
    .from('.hi', { onComplete: () => masterTl.play() })

// .to('.box', { duration: 1, height: "7vw", ease: "elastic.out" })


let masterTl = gsap.timeline({ repeat: -1 }).pause()
words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
    tl.to('.text', { duration: 1, text: word })
    masterTl.add(tl)
})


// duration: 1, y: "7vw", for box *** ease: "power3.out", duration: 1, width: "11.7vw", delay: 0.5, ease: "power4.inOut"