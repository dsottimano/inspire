(function () {

    new Vue({
        el: '#clock',
        data: {
            thetime: this.startTime,
            normalclock: true,
            timeMessage: '',
            settingsBox: false,
            personName: ''
        },
        mounted() {
            setInterval(this.startTime, 1000),
            
                this.getName()
        },
        methods: {
            startTime: function () {
                var today = new Date()
                var h = today.getHours()
                var m = today.getMinutes()
                var s = today.getSeconds()

                if (h < 11) {
                    this.timeMessage = 'Good Morning!'
                }
                if (h > 11 && h < 16) {
                    this.timeMessage = 'Good Afternoon!'
                }

                if (h > 15 && h < 24) {
                    this.timeMessage = 'Good Night!'
                }

                m = this.checkTime(m)
                h = this.checkTime(h)
                s = this.checkTime(s)

                if (this.normalclock === true) {

                    h = ((h + 11) % 12 + 1)
                }

                this.thetime = h + ":" + m + ":" + s
            },
            checkTime: function (i) {
                if (i < 10) {
                    i = "0" + i
                }
                return i
            },
            openSettings: function () {
                this.settingsBox = !this.settingsBox
            },
            changeTime: function () {
                this.normalclock = !this.normalclock
            },
            changeName: function () {
                localStorage.setItem('personsName', JSON.stringify(this.personName))
            },
            getName: function () {
                var n = localStorage.getItem('personsName')
                
                n = JSON.parse(n)
                this.personName = n
                console.log(n)
            }

        }
    })

})()