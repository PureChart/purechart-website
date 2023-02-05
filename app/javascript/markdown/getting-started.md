# Getting Started
## Installation
Hello! We're very excited to welcome you to the PureChart community. First, install the `purechart` gem.

```shell
gem install purechart
```

Then, display any of our charts in one of your views by calling a chart helper function and passing your JSON data as an argument.

### dashboard_controller.rb
```JavaScript
class DashboardController < ApplicationController
    def index
        class ChartsController < ApplicationController
            def index
            @data = [
                {
                    name: "Burger King",
                    color: "#ff7f50",
                    value: 1200
                },
                {
                    name: "McDonalds",
                    color: "#ff4757",
                    value: 500
                },
                {
                    name: "Green Burrito",
                    color: "#2ed573",
                    value: 780
                }
            ]
            end
        end
    end
end
```

