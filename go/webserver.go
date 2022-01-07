package main

import (
    "fmt"
    "net/http"
)

func main() {
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, you've ONE requested: %s\n", r.URL.Path)
    })

    http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, about: %s\n", r.URL.Path)
    })

    http.ListenAndServe(":8085", nil)
}