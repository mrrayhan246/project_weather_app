import requests
from django.shortcuts import render

def index(request):
    if request.method == 'POST':
        country = request.POST.get('country', '')
        city = request.POST.get('city', '')
        api_key = '9946c752ce229e1853a1a7be7efdca02'
        api_url = f'http://api.openweathermap.org/data/2.5/weather?q={city},{country}&appid={api_key}&units=metric'
        response = requests.get(api_url)
        data = response.json()
        context = {
            'country': country,
            'city': city,
            'data': data,
        }
        return render(request, 'index.html', context)
    return render(request, 'index.html')
