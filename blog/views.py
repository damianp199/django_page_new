from django.shortcuts import render
from django.http import HttpResponse

def blog_home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)

def blog_about(request):
    return render(request, 'blog/about.html')