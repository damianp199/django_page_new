from django.shortcuts import render
from django.http import HttpResponse

posts = [
    {
        'author': 'ASD123',
        'title': 'Blog Post 1',
        'content': 'First post content',
        'date_posted': 'August 27, 2018'
    },
    {
        'author': 'ASD321',
        'title': 'Blog Post 2',
        'content': 'Second post content',
        'date_posted': 'August 28, 2018'
    }
]


def blog_home(request):
    context = {
        'posts': posts
    }
    return render(request, 'blog/home.html', context)

def blog_about(request):
    return render(request, 'blog/about.html')