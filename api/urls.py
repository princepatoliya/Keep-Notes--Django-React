from django.urls import path, include

from .views import (
    getNotes,
    getRoutes,
    getNote,
    createNote,
    updateNote,
    deleteNote,
)

urlpatterns = [
    path('', getRoutes, name="getRoutes"),
    path('notes/', getNotes, name="getNotes"),
    path('notes/create/', createNote, name="create-note"),
    path('notes/<int:pk>/update/', updateNote, name="update-note"),
    path('notes/<int:pk>/delete/', deleteNote, name="delete-note"),
    path('notes/<int:pk>/', getNote, name="getNote"),
]
