from django.urls import path, include

from .views import (
    getNotes,
    getRoutes,
    getNote
)

urlpatterns = [
    path('', getRoutes, name="getRoutes"),
    path('notes/', getNotes, name="getNotes"),
    path('notes/<int:pk>/', getNote, name="getNote"),
]
