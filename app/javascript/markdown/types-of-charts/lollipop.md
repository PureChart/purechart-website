# Lollipop Chart
## Example
#### dashboard_controller.rb
```ruby
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

                @axes = {
                    horizontal: "Dollars"
                }
            end
        end
    end
end
```

#### dashboard/index.html.erb
```erb
<div class="card">
    <%= lollipop_chart @data, @axes %>
</div>
```

#### Result
![Images](./images/charts/Lollipop.png) {% align="center" %}