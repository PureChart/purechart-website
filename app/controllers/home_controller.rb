class HomeController < ApplicationController
    def index
        @data = [
            {
                name: "PureChart",
                color: "#2ed573",
                value: 0
            },
            {
                name: "Highcharts",
                color: "#ff4757",
                value: 1000
            },
            {
                name: "Chartkick",
                color: "#ff7f50",
                value: 2570
            },
        ]

        @configuration = {
            axes: {
                horizontal: "Lines of JavaScript",
            }
        }
    end
end
