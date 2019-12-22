from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, TaskSerializer
from .models import Todo, Task


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
