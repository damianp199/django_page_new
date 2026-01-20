from django.shortcuts import render
from django.http import HttpResponse


def portfolio_home(request):
    return render(request, 'portfolio_front/front_page.html')

def portfolio_cv(request):
    return render(request, 'portfolio_front/portfolio_cv.html')