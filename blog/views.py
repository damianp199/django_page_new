from django.shortcuts import render
from django.http import HttpResponse

def blog_home(request):
    return render(request, 'blog/home.html')

def blog_about(request):
    return render(request, 'blog/about.html')