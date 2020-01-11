from django.db import models
from django.dispatch import receiver
from django.db.models import Count

# Create your models here.


class Todo(models.Model):
    name = models.CharField(max_length=120)
    total_tasks = models.IntegerField(default=0)
    completed_tasks = models.IntegerField(default=0)
     
    def update_total_tasks(self):
        self.total_tasks = self.tasks.count()
        self.completed_tasks = self.tasks.filter(completed=True).count()
        self.save()

    def _str_(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE, related_name="tasks")

@receiver(models.signals.post_save, sender=Task)
def on_task_save(sender, instance, created, *args, **kwargs):
    instance.todo.update_total_tasks()

@receiver(models.signals.post_delete, sender=Task)
def on_task_delete(sender, instance, *args, **kwargs):
    instance.todo.update_total_tasks()