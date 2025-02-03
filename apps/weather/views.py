import requests
from django.shortcuts import render

def index(request):
    if request.method == 'POST':
        city = request.POST['city']
        api_key = 'your_api_key'
        api_url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}'
        response = requests.get(api_url)
        data = response.json()
        context = {
            'city': city,
            'data': data,
        }
        return render(request, 'weather/index.html', context)
    return render(request, 'weather/index.html')
